import less from '../method/less'
import exch from '../method/exch'

/**
 * 插入排序
 * @param array 要进行排序的数组
 * @returns 排序后的数组
 */

export default function insertSort<T>(array: T[]): T[] {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (less(array[j], array[j - 1])) {
        exch(array, j, j - 1)
      } else {
        break
      }
    }
  }

  return array
}
