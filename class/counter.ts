export default class Counter {
  private num:number

  constructor(initial:number) {
    this.num = initial
  }

  /**
   * 计数加一
   */
  public incerment() {
    this.num++
  }

  /**
   * 计数减一
   */
  public decrease() {
    this.num--
  }

  /**
   * 返回当前计数
   */
  public tally() {
    return this.num
  }
}