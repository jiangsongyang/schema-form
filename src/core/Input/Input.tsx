import { Input as AntdInput } from 'antd'

interface InputProps {
  [k: string]: any
}

export const Input = (props: InputProps) => {
  const { placeholder, allowClear } = props

  return <AntdInput placeholder={placeholder} allowClear={allowClear} />
}
