/**
 * 返回日期的日期部分，格式为 'YYYY-MM-DD'
 */
export function dateOnly(str: string): string {
  if (!str) return '无时间'

  // console.log('dateOnly', str)
  const [year, month, day] = str.split(/[- :/]/)
  return `${year}-${month}-${day}`
}
