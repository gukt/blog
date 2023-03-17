// 防抖函数
export function debounce(func: Function, delay: number = 300) {
  console.log('debounce')
  let timer: any = null
  return function (...args: any[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
