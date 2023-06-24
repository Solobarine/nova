import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import user from "../../features/async_thunks/User"
import { AppDispatch, RootState } from '../../types/types'

const AuthCheck = (): React.JSX.Element => {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()
    const user_detail = useSelector((state: RootState) => state.user)

    const cookie = localStorage.getItem('auth-token') as string

    if (!cookie || user_detail.loading === 'failed') {
        navigate('/login')
    }

    useEffect(() => {
        if (user_detail.logged_in !== true) {
            dispatch(user.jwt_login(cookie))
        }
    }, [dispatch, user_detail])

    if (user_detail.logged_in === false && user_detail.loading === 'failed') {
        navigate('/login')
    }

    return(
        <Outlet/>
    )
}

export default AuthCheck