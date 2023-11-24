/**
 * 计算斐波那契数列的第 n 项
 * @param n 数列索引（1，2，3……）
 * @return 第 n 项值
 */
export default function fibonacci(n: number): number {
  let res: number = 0
  switch (n) {
    case 1:
      res = 0
      break

    case 2:
      res = 1
      break

    default:
      res = fibonacci(n - 1) + fibonacci(n - 2)
      break
  }
  return res
}
