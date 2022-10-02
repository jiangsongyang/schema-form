export type TSchema = {
  type: string
  config: {
    [k: string]: any
  }
  children?: TSchema[]
}

export type TNodeProps = {
  key?: string
  [key: string]: any
}

export type TEffect = {
  type: string
  target: string
  action: string
  jsContent?: string
}


export type TComponentChildren = {
  uuid: string
  type: string
  config: TNodeProps
  children?: TComponentChildren[]
  effects?: TEffect[]
}
