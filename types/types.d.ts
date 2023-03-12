export interface Field {
  type?: string
  name: string
  value?: string | number | string[] | undefined
  placeholder?: string
  label?: string
  required?: boolean
  enabled?: boolean
}

export interface Article {
  /**
   * 标题
   */
  title: string
  /**
   * 摘要
   */
  excerpt?: string
  /**
   * 封面
   */
  cover?: string
  /**
   * 发布时间
   */
  date: string
  /**
   * 更新时间
   */
  updated?: string
  /**
   * 标签列表
   */
  tags?: string[]
  /**
   * 分类列表
   */
  categories?: string[]
  /**
   * Article slug
   */
  slug: string
  /**
   * 路径
   */
  path: string
}
