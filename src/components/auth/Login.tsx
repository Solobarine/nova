import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import user from "../../features/async_thunks/User"
import { login_inputs } from "./inputs"
import FormInput from "./FormInput"
import './css/Login.css'
// import { getCookie, setCookie } from "../../utils/cookie_helpers"

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user_details = useSelector(state => state.user)
    console.log(user_details)

    const [values, setValues] = useState({
        email: '',
        password: '' 
    })

    console.log(values)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handle_click = (e) => {
        e.preventDefault()
        dispatch(user.login(values))
        if (user_details.value.status === 200) {            
            return navigate('/series')
        }
    }

  return (
    <section id='login_section'>
        <form>
            <h2>Welcome Back</h2>
            {(user_details.error) && <span id="login_error">{user_details.error.message}</span>}
            {
                login_inputs.map(input => (
                    <FormInput key={input.id} details={input} value={values[input.name]} onChange={onChange} />
                ))
            }
            <input type="submit" value={"Login"} onClick={handle_click}/>
            <p>Not yet a User, <Link to='/register'>Register</Link></p>
        </form>
    </section>
  )
}

export default Login