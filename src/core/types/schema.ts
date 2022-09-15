export type TSchema = {
  type: string
  config: {
    [k: string]: any
  }
  children?: TSchema[]
}
