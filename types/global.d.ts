import { ParsedContent } from '@nuxt/content/dist/runtime/types'

export const foo = 'foo'

export declare class Person {
  name: string
  age: number
}

export declare interface Point {
  x: number
  y: number
}

export declare enum Gender {
  male,
  female,
}

export declare const myGlobalVar: number = 10

export interface Field {
  type?: string
  name: string
  value?: string | number | string[] | undefined
  placeholder?: string
  label?: string
  required?: boolean
  enabled?: boolean
}

/**
 * Article 类型
 */
export interface Article extends ParsedContent {
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
}

interface Animal {
  readonly name: string
  age: number
}

enum Color {
  Red,
  Green,
  Blue,
}

interface Duck extends Animal {
  color: Color
  quark(words: string): void
}

class MyDuck implements Duck {
  birthday: Date

  constructor(name: string, age: number, color?: Color) {
    this.name = name
    this.age = age
    this.color = color
  }

  setBirthday(birthday: Date) {
    this.birthday = birthday
  }
}
