import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserLogin, UserRegister } from "../../interfaces/interface"
import postRequest from "../../utils/postRequest"
import domain from '../../config/api'

const login_user = (payload: UserLogin) => {
    const url = `${domain}/login`
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return postRequest(url, options)
}

const register_user = (payload: UserRegister) => {
    const url = `${domain}/register`
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return postRequest(url, options)
}

const jwt_login = (cookies: string) => {
    const url = `${domain}/`
    const options = {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            'Content-Type': 'application/json',
            token: cookies
        }
    }

    return postRequest(url, options)
}

const user = {
    login: createAsyncThunk(
        'loginUser',
        login_user
    ),
    register: createAsyncThunk(
        'createUser',
        register_user
    ),
    jwt_login: createAsyncThunk(
        'loginWithJWT',
        jwt_login
    )
}

export default user