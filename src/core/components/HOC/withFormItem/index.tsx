import { Form } from 'antd'

import type { TComp } from '../../../types'

interface IFormItemProps {
  name: string
  label: string
}

export const withFormItem = (Comp: TComp) => (props: IFormItemProps) => {
  const { name, label, ...rest } = props
  console.log('name: ', name);

  return (
    <Form.Item name={name} label={label}>
      <Comp {...rest} />
    </Form.Item>
  )
}
