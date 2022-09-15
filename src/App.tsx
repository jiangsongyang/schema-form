import { Form, Button } from 'antd'
import { SchemaForm } from './core'
import schema from '../schema.json'
import './App.css'

function App() {
  const [form] = Form.useForm()

  return (
    <div style={{ width: '100vw' }}>
      <SchemaForm schema={schema} form={form} />
      <Button onClick={() => console.log(form.getFieldsValue())}>
        click me to get value
      </Button>
    </div>
  )
}

export default App
