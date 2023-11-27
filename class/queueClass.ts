export default class Queue<T> {
  private array: T[]

  constructor() {
    this.array = []
  }

  /**
   * 添加一个元素
   */
  public enqueue(item: T): void {
    this.array.push(item)
  }

  /**
   * 删除最早添加的元素
   */
  public dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('队列为空')
    } else {
      return this.array.shift()
    }
  }

  /**
   * 访问队首元素
   */
  public peek(): T {
    if (this.isEmpty()) {
      throw new Error('队列为空')
    } else {
      return this.array[0]
    }
  }

  /**
   * 队列是否为空
   */
  public isEmpty(): boolean {
    return this.array.length === 0
  }

  /**
   * 队列中的元素数量
   */
  public size(): number {
    return this.array.length
  }
}
