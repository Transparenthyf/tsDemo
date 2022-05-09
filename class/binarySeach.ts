export default class BinarySearch<T> {
  private array:T[]
  constructor(array:T[]) {
    this.array = array
  }
  /**
   * 查找 key 是否在 array 中
   * 如果在，返回索引
   * 如果不在，返回-1
   */
  public search(key:T):number {
    let start:number = 0
    let end:number = this.array.length - 1
    while (start < end) {
      let mid:number = start + Math.floor((end - start) / 2)
      if (key < this.array[mid]) {
        end = mid - 1
      } else if (key > this.array[mid]) {
        start = mid + 1
      } else {
        return mid
      }
    }
    return -1
  }
}