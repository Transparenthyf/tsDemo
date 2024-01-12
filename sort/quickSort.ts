import exchange from '../method/array/exchange'

/**
 * 快速排序
 * @param array 要进行排序的数组
 * @returns 排序后的数组
 */
export default function quickSort<T>(array: T[], start?: number, end?: number): T[] {
  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = array.length - 1
  }

  // 递归结束条件
  if (start >= end) {
    return
  }

  /** 基准值 */
  let baseIndex = start
  /** 分界索引 */
  let divideIndex = start
  // 根据基准值将数组分为两部分
  for (let i = start + 1; i <= end; i++) {
    if (array[i] < array[baseIndex]) {
      exchange(array, i, divideIndex + 1)
      divideIndex++
    }
  }
  exchange(array, baseIndex, divideIndex)

  // 递归排序基准值左右两侧剩余元素
  quickSort(array, start, divideIndex - 1)
  quickSort(array, divideIndex + 1, end)

  return array
}
