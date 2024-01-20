/**
 * 计数排序
 * @param array 要进行排序的整数数组
 * @returns 排序后的数组
 */
export default function bubbleSort(array: number[]): number[] {
  let counter: number[] = []
  // 对数组的值进行计数
  for (const item of array) {
    counter[item] = counter[item] === undefined ? 1 : counter[item] + 1
  }

  // 根据计数器排序
  let tmpArray: number[] = []
  for (let num = 0; num < counter.length; num++) {
    const count = counter[num]
    for (let j = 0; j < count; j++) {
      tmpArray.push(num)
    }
  }

  return tmpArray
}
