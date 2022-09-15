import React from 'react'
import type { ReactElement } from 'react'
import type { TSchema } from '../../types'
import { Input } from '../../Input'

const componentsMap = new Map()

;[
  {
    type: 'Input',
    component: Input,
  },
].forEach((comp) => {
  componentsMap.set(comp.type, comp.component)
})

const createElement: (schemaNodeInfo: TSchema) => ReactElement = (
  schemaNodeInfo: TSchema
) => {
  return React.createElement(
    componentsMap.get(schemaNodeInfo.type),
    schemaNodeInfo.config,
    schemaNodeInfo.children?.length
      ? schemaNodeInfo.children.map(createElement)
      : null
  )
}

export const useCreateFormNode = (children: TSchema[]) =>
  children.map(createElement)
