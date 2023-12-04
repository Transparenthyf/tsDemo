import exchange from '../method/array/exchange'

/**
 * 插入排序
 * @param array 要进行排序的数组
 * @returns 排序后的数组
 */

export default function insertSort<T>(array: T[]): T[] {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        exchange(array, j, j - 1)
      } else {
        break
      }
    }
  }

  return array
}
