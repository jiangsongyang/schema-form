import React from 'react'
import type { ReactElement } from 'react'
import type { TSchema } from '../../types'
// import component to load it
import { Input } from '../../components/base'
import { Row } from '../../components/layout'

const componentsMap = new Map()

;[
  {
    type: 'Input',
    component: Input,
  },
  {
    type: 'Row',
    component: Row,
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
