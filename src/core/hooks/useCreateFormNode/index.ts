import React from 'react'
import type { ReactElement } from 'react'
import { Guard } from '../../runtime'
import type { TSchema } from '../../types'
// import component to load it
import * as components from '../../components'


const createElement: (schemaNodeInfo: TSchema) => ReactElement = (
  schemaNodeInfo: TSchema
) => {
  const props = {
    ...schemaNodeInfo.config,
    guard: new Guard(null as any, null as any, null as any)
  }

  return React.createElement(
    (components as any)[schemaNodeInfo.type],
    props,
    schemaNodeInfo.children?.length
      ? schemaNodeInfo.children.map(createElement)
      : null
  )
}

export const useCreateFormNode = (children: TSchema[]) =>
  children.map(createElement)
