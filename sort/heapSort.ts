import exchange from '../method/array/exchange'

/**
 * 思路：
 * 将数组看成一个完全二叉树
 * 将二叉树转化成大顶堆
 *
 * 将大顶堆的顶（最大值）与堆底值（数组尾部）交换位置
 * 将剩余值重新堆化
 *
 * 重复上一步直到堆里只剩一个节点
 */

/**
 * 堆排序
 * @param array 要进行排序的数组
 * @returns 排序后的数组
 */
export default function heapSort<T>(array: T[]): T[] {
  // 堆化非叶节点
  // i 当前堆化节点索引
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    siftDown(array, array.length, i)
  }

  // j 当前循环次数
  for (let j = 1; j < array.length; j++) {
    exchange(array, 0, array.length - j)
    siftDown(array, array.length - j, 0)
  }

  return array
}

/**
 * 堆化索引为 i 的节点
 * @param heap 被视为堆的数组
 * @param n 数组中有多少个节点已经被堆化
 * @param i 要堆化的节点
 */
function siftDown<T>(heap: T[], n: number, i: number) {
  /** 要堆化节点的左节点 */
  let left = 2 * i + 1
  /** 要堆化节点的右节点 */
  let right = 2 * i + 2
  /** 值最大的节点 */
  let max = i

  if (left < n && heap[left] > heap[max]) {
    max = left
  }
  if (right < n && heap[right] > heap[max]) {
    max = right
  }

  if (max !== i) {
    exchange(heap, i, max)
    siftDown(heap, n, max)
  }
}
