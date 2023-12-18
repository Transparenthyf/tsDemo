import Heap from '../class/heapClass'

/**
 * 找出数组中最大的的 k 个值
 * @param array 一个数组
 * @param k 要返回多少个值
 * @returns 数组中最大的 k 个值
 */
export default function topK(array: number[], k: number) {
  if (array.length === 0) {
    return []
  }
  let tmpHeap = new Heap(array[0])
  for (let i = 1; i < array.length; i++) {
    const element = array[i]
    if (i < k) {
      tmpHeap.push(element)
    } else {
      if (element > tmpHeap.peek()) {
        tmpHeap.pop()
        tmpHeap.push(element)
      }
    }
  }

  return tmpHeap.toArray()
}
