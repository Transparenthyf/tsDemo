/**
 * 二分查找
 * @param key 要查找的值
 * @param array 一个顺序的数组
 * @returns 要查找的值在数组中的索引
 */

export default function binarySearch<T>(key:T, array:T[]):number {
  let start:number = 0
  let end:number = array.length - 1
  while (start < end) {
    let mid:number = start + Math.floor((end - start) / 2)
    if (key < array[mid]) {
      end = mid - 1
    } else if (key > array[mid]) {
      start = mid + 1
    } else {
      return mid
    }
  }
  return -1
}