// /**
//  * 返回日期的日期部分，格式为 'YYYY-MM-DD'
//  */
// export function dateOnly(str: string): string {
//   if (!str) return '无时间'

//   // console.log('dateOnly', str)
//   const [year, month, day] = str.split(/[- :/]/)
//   return `${year}-${month}-${day}`
// }
// 
// /**
//  * 格式化日期字符串
//  *
//  * @param str 日期字符串
//  * @returns
//  */
// export function monthAndDayOnly(date: string, format = 'YYYY-MM-DD'): string {
//   if (!date) return ''

//   const [year, month, day] = date.split(/[- :/T.]/)
//   return `${month.padStart(2, '0')}-${day.padStart(2, '0')}`
// }
