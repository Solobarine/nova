import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../../interfaces/interface";
import { setCookie } from '../../utils/cookie_helpers'
import User from "../async_thunks/User";

const initialState = {
    value: {
        data: [],
        status: 0
    },
    loading: 'idle',
    logged_in: false,
    error: []
} as InitialState

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(User.login.pending, (state) => {
            state.value = {
                data: [],
                status: 0
            }
            state.error = {}
            state.logged_in = false
            state.loading = 'pending'
        })
        .addCase(User.login.fulfilled, (state, actions) => {
            const { status, data } = actions.payload
            if (status === 200) {
                state.value = {
                    data,
                    status
                }
                localStorage.setItem('auth-token', data.authorization.token)
                setCookie('auth-token', data.authorization.token)
                state.error = {}
                state.logged_in = true
                state.loading = 'success'
            } else {
                state.error = data
                state.value = {
                    data: [],
                    status
                }
                state.logged_in = false
                state.loading = 'failed'
            }
        })
        .addCase(User.login.rejected, (state, actions) => {
            state.error = actions.error
            state.value = {
                data: [],
                status: 0
            }
            state.logged_in = false
            state.loading = 'failed'
        })
        builder.addCase(User.register.pending, (state) => {
            state.value = {
                data: [],
                status: 0
            }
            state.error = {}
            state.logged_in = false
            state.loading = 'pending'
        })
        .addCase(User.register.fulfilled, (state, actions) => {
            const { status, data } = actions.payload
            
            if (status === 200) {
                state.value = {
                    data,
                    status
                }
                setCookie('auth-token', data.authorization.token)
                localStorage.setItem('auth-token', data.authorization.token)
                state.logged_in = true
                state.loading = 'success'
            } else {
                state.error = data
                state.value = {
                    data: [],
                    status
                }
                state.logged_in = false
                state.loading = 'failed'
            }
        })
        .addCase(User.register.rejected, (state, actions) => {
            state.error = actions.error
            state.value = {
                data: [],
                status: 0
            }
            state.logged_in = false
            state.loading = 'failed'
        })
        builder.addCase(User.jwt_login.pending, (state) => {
            state.value = {
                data: [],
                status: 0
            }
            state.error = {}
            state.logged_in = false
            state.loading = 'pending'
        })
        .addCase(User.jwt_login.fulfilled, (state, actions) => {
            const { status, data } = actions.payload
            
            if (status === 200) {
                state.value = {
                    data,
                    status
                }
                state.logged_in = true
                state.loading = 'success'
            } else {
                state.error = data
                state.value = {
                    data: [],
                    status
                }
                state.logged_in = false
                state.loading = 'failed'
            }
        })
        .addCase(User.jwt_login.rejected, (state, actions) => {
            state.error = actions.error
            state.value = {
                data: [],
                status: 0
            }
            state.logged_in = false
            state.loading = 'failed'
        })
    },
})

export default user.reducer