import { createElement } from 'react'
import type { TSchema } from '../../types'

export const useCreateFormNode = (children: TSchema[]) => {
  console.log('children: ', children);
  return createElement('div')
}
