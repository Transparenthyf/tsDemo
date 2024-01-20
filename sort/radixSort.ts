import bubbleSort from './bubbleSort'

/**
 * 基数排序
 * @param array 要进行排序的整数数组
 * @returns 排序后的数组
 */
export default function radixSort(array: number[]): number[] {
  /** 最大值位数 */
  let maxDigit = 1
  /** 基数数组 */
  let radixArray: number[][] = []

  // 从右侧第一位开始遍历到最大位
  for (let digit = 1; digit <= maxDigit; digit++) {
    // 初始化基数数组
    for (let i = 0; i < 10; i++) {
      radixArray[i] = []
    }

    for (const num of array) {
      /** 当前基数位上的值 */
      let radix = getRadix(num, digit)
      radixArray[radix].push(num)

      // 第一次遍历数组时更新最大值位数
      if (digit === 1) {
        let digitCount = Math.floor(Math.log10(num)) + 1
        if (digitCount > maxDigit) {
          maxDigit = digitCount
        }
      }
    }

    // 将排序后的值写回原数组
    array = []
    for (let nums of radixArray) {
      nums = bubbleSort(nums)
      for (const num of nums) {
        array.push(num)
      }
    }
  }

  return array
}

/**
 * 获取指定位上的数字
 * @param num 一个整数
 * @param n 要获取整数从右向左的第几位
 */
function getRadix(num: number, n: number) {
  // 计算余数以移除右侧 m-1 位数
  const remainder = Math.floor(num / Math.pow(10, n - 1))

  // 取余数的最右侧一位数字
  const radix = remainder % 10

  return radix
}
