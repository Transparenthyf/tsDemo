export default class HashMap {
  /** 键值对数量 */
  private size: number
  /** 哈希表容量 */
  private capacity: number
  /** 扩容阈值 */
  private loadThres: number
  /** 扩容倍数 */
  private extendRatio: number
  /** 桶数组 */
  private bucketArray: (Pair | null)[]
  /** 删除标记 */
  private TOMBSTONE: Pair

  constructor() {
    this.size = 0
    this.capacity = 10
    this.loadThres = 2 / 3
    this.extendRatio = 2
    this.bucketArray = new Array(this.capacity).fill(null)
    this.TOMBSTONE = new Pair(-1, '-1')
  }

  /**
   * 设置一个键值对
   */
  set(key: number, value: string) {
    let index = this.hash(key)
    /** 是否已设置键值对 */
    let setFlag = false
    /** 遇到的第一个删除标记索引 */
    let tombstoneIndex = -1

    // 判断是否需要扩容
    if (this.loadFactor() > this.loadThres) {
      this.extend()
    }

    let i = index
    do {
      if (this.bucketArray[i] === null) {
        // 找到空位插入键值对
        if (tombstoneIndex === -1) {
          this.bucketArray[i] = new Pair(key, value)
        } else {
          this.bucketArray[tombstoneIndex] = new Pair(key, value)
          this.bucketArray[i] = this.TOMBSTONE
        }
        setFlag = true
        break
      } else if (this.bucketArray[i] === this.TOMBSTONE) {
        // 记录遇到的第一个删除标记索引
        tombstoneIndex = i
      } else if (this.bucketArray[i].key === key) {
        this.bucketArray[i].value = value
        if (tombstoneIndex !== -1) {
          this.bucketArray[tombstoneIndex] = this.bucketArray[i]
          this.bucketArray[i] = this.TOMBSTONE
        }
        setFlag = true
      }
      // 循环数组
      i = (i + 1) % this.capacity
    } while (setFlag === false && i !== index)

    if (setFlag === false) {
      // 哈希表内没有空位（null），先清理哈希表中的删除标记再插入
      this.clearTombstone()
      this.set(key, value)
    } else {
      this.size++
    }
  }

  /**
   * 查找一个值
   */
  get(key: number): string | null {
    let index = this.hash(key)
    /** 键对应的值 */
    let value: string | null = null
    /** 遇到的第一个删除标记索引 */
    let tombstoneIndex = -1

    let i = index
    while (this.bucketArray[i] !== null) {
      if (this.bucketArray[i] === this.TOMBSTONE) {
        // 记录遇到的第一个删除标记索引
        tombstoneIndex = i
      } else if (this.bucketArray[i].key === key) {
        value = this.bucketArray[i].value
        if (tombstoneIndex !== -1) {
          this.bucketArray[tombstoneIndex] = this.bucketArray[i]
          this.bucketArray[i] = this.TOMBSTONE
        }
      }

      // 循环数组
      i = (i + 1) % this.capacity
      if (i === index) {
        break
      }
    }

    return value
  }

  /**
   * 删除一个键值对
   */
  delete(key: number) {
    let index = this.hash(key)

    let i = index
    while (this.bucketArray[i] !== null) {
      if (this.bucketArray[i].key === key) {
        this.bucketArray[i] = this.TOMBSTONE
        this.size--
      }

      // 循环数组
      i = (i + 1) % this.capacity
      if (i === index) {
        break
      }
    }
  }

  /**
   * 获取所有键值对
   */
  entries() {
    let arr: (Pair | null)[] = []
    for (const pair of this.bucketArray) {
      if (pair !== null && pair !== this.TOMBSTONE) {
        arr.push(pair)
      }
    }
    return arr
  }

  /**
   * 获取所有键
   */
  keys(): number[] {
    let arr: number[] = []
    for (const pair of this.bucketArray) {
      if (pair !== null && pair !== this.TOMBSTONE) {
        arr.push(pair.key)
      }
    }
    return arr
  }

  /**
   * 获取所有值
   */
  values(): string[] {
    let arr: string[] = []
    for (const pair of this.bucketArray) {
      if (pair !== null && pair !== this.TOMBSTONE) {
        arr.push(pair.value)
      }
    }
    return arr
  }

  /**
   * 哈希操作
   */
  private hash(key: number): number {
    return key % this.capacity
  }

  /**
   * 负载因子
   */
  private loadFactor(): number {
    return this.size / this.capacity
  }

  /**
   * 扩容哈希表
   */
  private extend() {
    this.capacity *= this.extendRatio
    let oldBucketArray = this.bucketArray
    this.bucketArray = new Array(this.capacity).fill(null)
    this.size = 0
    for (const pair of oldBucketArray) {
      if (pair !== null && pair !== this.TOMBSTONE) {
        this.set(pair.key, pair.value)
      }
    }
  }

  /**
   * 清理删除标记
   */
  private clearTombstone() {
    let oldBucketArray = this.bucketArray
    this.bucketArray = new Array(this.capacity).fill(null)
    this.size = 0
    for (const pair of oldBucketArray) {
      if (pair !== null && pair !== this.TOMBSTONE) {
        this.set(pair.key, pair.value)
      }
    }
  }
}

/**
 * 键值对类
 */
class Pair {
  public key: number
  public value: string

  constructor(key: number, value: string) {
    this.key = key
    this.value = value
  }
}
