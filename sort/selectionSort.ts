import less from '../method/less'
import exch from '../method/exch'

/**
 * 选择排序
 * @param array 要进行排序的数组
 * @returns 排序后的数组
 */

export default function selectionSort<T>(array: T[]): T[] {
  for (let i: number = 0; i < array.length; i++) {
    let index: number = i
    for (let j = i; j < array.length; j++) {
      if (less(array[j], array[index])) {
        index = j
      }
    }
    exch(array, i, index)
  }

  return array
}
