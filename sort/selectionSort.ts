import exchange from '../method/array/exchange'

/**
 * 选择排序
 * @param array 要进行排序的数组
 * @returns 排序后的数组
 */

export default function selectionSort<T>(array: T[]): T[] {
  for (let i: number = 0; i < array.length; i++) {
    let index: number = i
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[index]) {
        index = j
      }
    }
    exchange(array, i, index)
  }

  return array
}
