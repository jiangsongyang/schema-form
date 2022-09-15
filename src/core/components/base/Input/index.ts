import { withFormItem, withCol, wrap } from '../../HOC'
import { Input as BaseInput } from './Input'

const BaseInputHOCS = [withFormItem , withCol]

export const Input = wrap(BaseInputHOCS, BaseInput)
