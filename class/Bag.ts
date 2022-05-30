export default class Bag<T> {
  private array:T[]
  private N:number

  constructor() {
    this.array = []
    this.N = 0
  }

  /**
   * 添加一个元素
   */
  public add(item:T):void {
    this.array[this.N++] = item
  }

  /**
   * 背包是否为空
   */
  public isEmpty():boolean {
    return this.N === 0
  }

  /**
   * 背包中元素的数量
   */
  public size():number {
    return this.N
  }
}