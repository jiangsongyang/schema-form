import { Form, Button } from 'antd'
import { SchemaForm } from './core'
import schema from '../schema.json'
import './App.css'

function App() {
  const [form] = Form.useForm()

  return (
    <>
      <SchemaForm schema={schema} form={form} />
      <Button onClick={() => console.log(form.getFieldsValue())}>
        click me to get value
      </Button>
    </>
  )
}

export default App
