import React from 'react'
import type { ReactElement } from 'react'
import type { TSchema } from '../../types'
// import component to load it
import * as components from '../../components'


const createElement: (schemaNodeInfo: TSchema) => ReactElement = (
  schemaNodeInfo: TSchema
) => {
  return React.createElement(
    (components as any)[schemaNodeInfo.type],
    schemaNodeInfo.config,
    schemaNodeInfo.children?.length
      ? schemaNodeInfo.children.map(createElement)
      : null
  )
}

export const useCreateFormNode = (children: TSchema[]) =>
  children.map(createElement)
