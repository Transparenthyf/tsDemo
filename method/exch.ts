/**
 * 交换数组中的两个元素
 * @param array 要交换元素的数组
 * @param index1 交换元素的索引
 * @param index2 交换元素的索引
 */

export default function exch<T>(array: T[], index1: number, index2: number): void {
  let tmp: T = array[index1]
  array[index1] = array[index2]
  array[index2] = tmp
}
