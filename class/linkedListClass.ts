/**
 * 链表
 */
export default class linkedListClass<T> {
  /** 跟节点 */
  root: linkedListNodeClass<T>
  constructor(val: T) {
    this.root = new linkedListNodeClass(val)
  }

  /**
   * 在目标节点后插入一个新的节点
   * @param val 节点的值
   * @param targetNode 目标节点
   */
  insert(val: T, targetNode: linkedListNodeClass<T>) {
    // 如果没有目标节点，将最后一个节点当作目标节点
    let tmpNode = this.root
    while (targetNode === undefined) {
      if (tmpNode.next === null) {
        targetNode = tmpNode
      } else {
        tmpNode = tmpNode.next
      }
    }

    let newNode = new linkedListNodeClass(val)

    // 将新节点插入链表
    targetNode.next.prev = newNode
    newNode.next = targetNode.next

    newNode.prev = targetNode
    targetNode.next = newNode
  }

  /**
   * 删除目标节点
   */
  remove(targetNode: linkedListNodeClass<T>) {
    if (targetNode.next !== null) {
      targetNode.next.prev = targetNode.prev
    } else {
      // 没有子节点说明要删除的为尾节点
      targetNode.prev.next = null
    }

    if (targetNode.prev !== null) {
      targetNode.prev.next = targetNode.next
    } else {
      // 没有父节点说明要删除的节点为根节点
      this.root = targetNode.next
    }
  }

  /**
   * 查找值为 val 的节点
   */
  find(val: T): linkedListNodeClass<T> | null {
    let targetNode: linkedListNodeClass<T> | null = null
    let tmpNode = this.root

    while (tmpNode !== null) {
      if (tmpNode.val === val) {
        targetNode = tmpNode
        break
      } else {
        tmpNode = tmpNode.next
      }
    }

    return targetNode
  }
}

/** 链表节点 */
class linkedListNodeClass<T> {
  val: T
  next: linkedListNodeClass<T> | null
  prev: linkedListNodeClass<T> | null
  constructor(val: T, next?: linkedListNodeClass<T> | null, prev?: linkedListNodeClass<T> | null) {
    this.val = val
    this.next = next === undefined ? null : next
    this.prev = prev === undefined ? null : prev
  }
}
