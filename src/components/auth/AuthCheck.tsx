import { useCookies } from "react-cookie"
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import user from "../../features/async_thunks/User"
import { getCookie } from "../../utils/cookie_helpers"

const AuthCheck = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user_detail = useSelector(state => state.user)

    const cookie = localStorage.getItem('auth-token')

    if (!cookie) {
        return navigate('/login')
    }

    useEffect(() => {
        if (user_detail.logged_in !== true) {
            dispatch(user.jwt_login(cookie))
        }
    }, [dispatch])

    if (user_detail.loading === 'pending') return <p>loading...</p>
    if (user_detail.loading === 'failed') return <p>oops</p>

    if (user_detail.value.status === 200) {
        return <>
                <Outlet/>
                <p>yeah</p>
            </>
    }
}

export default AuthCheck