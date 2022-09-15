import { Col } from 'antd'

import type { TComp } from '../../../types'

interface IColItemProps {
  key: string
  span: number
}

const DEFAULT_SPAN = 24

export const withCol = (Comp: TComp) => (props: IColItemProps) => {
  const { span, ...rest } = props
  return (
    <Col span={span || DEFAULT_SPAN}>
      <Comp {...rest} />
    </Col>
  )
}
