export enum ReadingSpeed {
  fast = 300, // wpm (words per minute)
  normal = 200,
  slow = 175,
  slower = 150,
  slowest = 100,
}

// https://blog.medium.com/read-time-and-you-bc2048ab620c
export default function useReadingTime(selector: string) {
  const wordCount = ref(0)
  const chineseCharacterCount = ref(0)

  function countLength(): void {
    const element = document.querySelector(selector) as HTMLElement

    if (element) {
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null
      )

      while (walker.nextNode()) {
        const node = walker.currentNode as Text
        const text = node.textContent?.trim() ?? ''

        // 统计单词数
        wordCount.value += text
          .split(/\s+/)
          .filter((word) => word.length > 0).length

        // 统计中文字符数
        const chineseCharacters = text.match(/[\u4E00-\u9FA5]/g)
        if (chineseCharacters) {
          chineseCharacterCount.value += chineseCharacters.length
        }
      }
    }
  }
  function calculateReadingTime(speed = ReadingSpeed.normal): string {
    const total = wordCount.value + chineseCharacterCount.value

    // 计算阅读时间，单位是分钟
    const readingTimeInMinutes = Math.ceil(total / speed)
    return `${Math.max(1, readingTimeInMinutes)} 分钟`
  }

  // 在组件挂载时开始监听
  onMounted(() => {
    countLength()
    document.addEventListener('DOMContentLoaded', countLength)
    // window.addEventListener('resize', countLength)
  })

  // 在组件卸载时停止监听
  onUnmounted(() => {
    document.removeEventListener('DOMContentLoaded', countLength)
    // window.removeEventListener('resize', countLength)
  })

  return { wordCount, chineseCharacterCount, calculateReadingTime }
}

function resolveSpeed(levelOrSpeed = ReadingSpeed.normal): number {
  if (typeof levelOrSpeed === 'number') return levelOrSpeed as number
  return levelOrSpeed as number
}

// 计算文本长度的函数
// function calculateTextLength(rootElement: HTMLElement): number {
//   let textLength = 0

//   // 遍历所有的子节点
//   const walker = document.createTreeWalker(
//     rootElement,
//     NodeFilter.SHOW_TEXT,
//     null
//   )
//   while (walker.nextNode()) {
//     const node = walker.currentNode as Text

//     // 忽略空白字符
//     const text = node.textContent?.trim()
//     if (text) {
//       textLength += text.length
//     }
//   }

//   return textLength
// }
