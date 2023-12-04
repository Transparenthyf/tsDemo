/**
 * 归并排序
 * @param array 要进行排序的数组
 * @param start 排序开始索引
 * @param end 排序结束索引
 * @returns 排序后的数组
 */

export default function mergeSort<T>(array: T[], start?: number, end?: number): T[] {
  let min: number = typeof start === 'undefined' ? 0 : start
  let max: number = typeof end === 'undefined' ? array.length - 1 : end
  let mid: number = Math.floor((min + max) / 2)
  let tmpArray: T[] = []

  if (max <= min) {
    return
  }

  mergeSort(array, min, mid)
  mergeSort(array, ++mid, max)

  let left: number = min
  let right: number = mid

  for (let i = min; i <= max; i++) {
    if (left < mid && right <= max) {
      if (array[right] < array[left]) {
        tmpArray.push(array[right])
        right++
      } else {
        tmpArray.push(array[left])
        left++
      }
    } else if (left < mid && right > max) {
      tmpArray.push(array[left])
      left++
    } else if (left >= mid && right <= max) {
      tmpArray.push(array[right])
      right++
    }
  }

  for (let i = min, j = 0; j < tmpArray.length; i++, j++) {
    array[i] = tmpArray[j]
  }

  return array
}
