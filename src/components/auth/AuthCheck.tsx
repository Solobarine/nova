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

    if (!cookie) {
        navigate('/login')
    }

    useEffect(() => {
        if (user_detail.logged_in !== true) {
            dispatch(user.jwt_login(cookie))
        }
    }, [dispatch, user_detail, cookie])

    if (user_detail.loading === 'pending') {
        return <p>loading...</p>
    }
    if (user_detail.loading === 'failed') {
        navigate('/login')
    }

    if (user_detail.value.status === 200) {
        return( <>
                <Outlet/>
                <p>yeah</p>
            </>
        )
    }
    return AuthCheck()
}

export default AuthCheck