export interface Field {
  type?: string
  name: string
  value?: string | number | string[] | undefined
  placeholder?: string
  label?: string
  required?: boolean
  enabled?: boolean
}
