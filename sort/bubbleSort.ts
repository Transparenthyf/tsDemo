import exchange from '../method/array/exchange'

/**
 * 冒泡排序
 * @param array 要进行排序的数组
 * @returns 排序后的数组
 */
export default function bubbleSort<T>(array: T[]): T[] {
  for (let i = 0; i < array.length; i++) {
    // 本轮遍历是否交换
    let exchangeFlag = false
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1] > array[j]) {
        exchange(array, j - 1, j)
        exchangeFlag = true
      }
    }

    // 本轮遍历没有交换过元素说明数组已经有序，退出遍历
    if (exchangeFlag === false) {
      break
    }
  }
  return array
}
