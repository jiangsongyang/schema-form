import { Form } from 'antd'
import type { FormInstance } from 'antd/es/form'
import { useCreateFormNode } from '../../hooks'
import type { TSchema } from '../../types'

interface SchemaFormProps {
  schema: TSchema
  form: FormInstance
}

export const SchemaForm = (props: SchemaFormProps) => {
  const { schema, form } = props

  // 通过这个 hook 
  // 解析配置
  // 创建 react node
  const node = useCreateFormNode(schema.children || [])

  return <Form form={form}>{node}</Form>
}
