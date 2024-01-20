/**
 * 如何确定要分多少个桶？
 * 如何确定每个桶的区间？
 */

/** 要求输入数组的值在 [0,1) 内 */

/**
 * 桶排序
 * @param array 要进行排序的数组
 * @returns 排序后的数组
 */
export default function bucketSort(array: number[]): number[] {
  let bucketCount = Math.ceil(array.length / 2)
  let buckets: number[][] = []

  // 初始化桶
  for (let i = 0; i < bucketCount; i++) {
    buckets.push([])
  }

  // 将元素分入对应的桶
  for (const item of array) {
    let bucketIndex = Math.floor(item * bucketCount)
    buckets[bucketIndex].push(item)
  }

  // 桶内排序
  for (const bucket of buckets) {
    bucket.sort()
  }

  // 依次从桶中去除元素
  let i = 0
  let tmpArray: number[] = []
  for (const bucket of buckets) {
    for (const item of bucket) {
      tmpArray[i++] = item
    }
  }

  return tmpArray
}
