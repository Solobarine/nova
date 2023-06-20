import { useState } from 'react'
import { FunctionInterface, Input } from "../../interfaces/interface"
import './css/FormInput.css'

const FormInput = (props: {
  details: Input,
  value: string,
  onChange: FunctionInterface
}) => {
  const { name, label, type,  required, errorMessage, pattern, autocomplete } = props.details

  const [focus, setFocus] = useState(false)

  const handle_focus = () => {
    setFocus(true)
  }

  const { onChange } = props

  return (
    <div className='input'>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} autoComplete={autocomplete} required={required} pattern={pattern} onChange={onChange} onBlur={handle_focus} focused={focus.toString()}/>
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput