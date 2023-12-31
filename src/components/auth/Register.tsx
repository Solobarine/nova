import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { register_inputs } from "./inputs"
import FormInput from "./FormInput"
import { AppDispatch, RootState } from '../../types/types'
import user from '../../features/async_thunks/User'
import './css/Register.css'

const Register = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const user_details = useSelector((state: RootState) => state.user)
    console.log(user_details)
    
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const inputs: { [key: string]: string } = values

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handle_click = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        dispatch(user.register(values))
        if (user_details.value.status === 200) {
            navigate('/series')
        }
    }

  return (
    <section id="register_section">
        <form>
            <h2>Create an Account</h2>
            {
                register_inputs.map(input =>(
                    <FormInput key={input.id} details={input} value={inputs[input.name]} onChange={onChange} />
                ))
            }
            <input type="submit" value="Register" onClick={handle_click} />
            <p>Already a User? <Link to='/login'>Login</Link></p>
        </form>
    </section>
  )
}

export default Register