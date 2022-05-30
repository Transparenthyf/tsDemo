/**
 * 判断第一个参数是否小于第二个参数
 * @param param1 将要进行比较的第一个参数
 * @param param2 将要进行比较的第二个参数
 */

export default function less<T>(param1: T, param2: T): boolean {
  return param1 < param2
}
