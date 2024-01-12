import exchange from '../method/array/exchange'

/**
 * 冒泡排序
 * @param array 要进行排序的数组
 * @returns 排序后的数组
 */
export default function bubbleSort<T>(array: T[]): T[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] > array[j]) {
        exchange(array, j - 1, j)
      }
    }
  }
  return array
}
