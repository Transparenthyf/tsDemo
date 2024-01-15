/**
 * 归并排序
 * @param array 要进行排序的数组
 * @param start 排序开始索引
 * @param end 排序结束索引
 * @returns 排序后的数组
 */
export default function mergeSort<T>(array: T[], start?: number, end?: number): T[] {
  start = start === undefined ? 0 : start
  end = end === undefined ? array.length - 1 : end

  if (end <= start) {
    return
  }

  /** 中间位置索引 */
  let mid: number = Math.floor((start + end) / 2)

  mergeSort(array, start, mid)
  mergeSort(array, ++mid, end)

  // mid 将 start 到 end 这段数组分为左右两段
  /** 左侧数组起始位置索引 */
  let left: number = start
  /** 右侧数组起始位置索引 */
  let right: number = mid
  /** 临时储存排序后的数组 */
  let tmpArray: T[] = []

  // 将左右两侧数组整合
  for (let i = start; i <= end; i++) {
    if (left < mid && right <= end) {
      if (array[right] < array[left]) {
        tmpArray.push(array[right])
        right++
      } else {
        tmpArray.push(array[left])
        left++
      }
    } else if (left < mid && right > end) {
      tmpArray.push(array[left])
      left++
    } else if (left >= mid && right <= end) {
      tmpArray.push(array[right])
      right++
    }
  }

  // 写回原数组
  for (let i = start, j = 0; j < tmpArray.length; i++, j++) {
    array[i] = tmpArray[j]
  }

  return array
}
