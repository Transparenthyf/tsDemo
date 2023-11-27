export default class Stack<T> {
  private array: T[]

  constructor() {
    this.array = []
  }

  /**
   * 添加一个元素
   */
  public push(item: T): void {
    this.array.push(item)
  }

  /**
   * 删除最早添加的元素
   */
  public pop(): T {
    if (this.isEmpty()) {
      throw new Error('栈为空')
    } else {
      return this.array.pop()
    }
  }

  /**
   * 访问栈顶元素
   */
  public peek(): T {
    if (this.isEmpty()) {
      throw new Error('栈为空')
    } else {
      return this.array[this.array.length - 1]
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
