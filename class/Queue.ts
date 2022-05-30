export default class Queue<T> {
  private array:T[]
  private N:number

  constructor() {
    this.array = []
    this.N = 0
  }

  /**
   * 添加一个元素
   */
  public enqueue(item:T):void {
    this.array[this.N++] = item
  }

  /**
   * 删除最早添加的元素
   */
  public dequeue():T {
    this.N--
    return this.array.splice(0, 1)[0]
  }

  /**
   * 队列是否为空
   */
  public isEmpty():boolean {
    return this.N === 0
  }

  /**
   * 队列中的元素数量
   */
  public size():number {
    return this.N
  }
}