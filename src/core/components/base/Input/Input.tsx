import { Input as AntdInput, Form } from 'antd'

interface InputProps {
  [k: string]: any
}

export const Input = (props: InputProps) => {
  const { placeholder, allowClear, ...rest } = props

  return (
    <AntdInput placeholder={placeholder} allowClear={allowClear} {...rest} />
  )
}
