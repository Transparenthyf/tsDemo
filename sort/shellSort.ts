import exchange from '../method/array/exchange'

/**
 * 希尔排序
 * @param array 要进行排序的数组
 * @returns 排序后的数组
 */
export default function shellSort<T>(array: T[]): T[] {
  let N: number = array.length
  let h = 1
  while (h < Math.floor(N / 3)) {
    h = h * 3 + 1
  }
  while (h >= 1) {
    for (let i = h; i < N; i++) {
      for (let j = i; j >= h && array[j] < array[j - h]; j -= h) {
        exchange(array, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }

  return array
}
