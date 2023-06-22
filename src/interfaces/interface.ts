import { SerializedError } from "@reduxjs/toolkit"
import { SingleSeries, SeriesInterface } from "./series_interface"

interface UserLogin {
    email: string,
    password: string
}

interface UserRegister {
    name: string,
    email: string,
    password: string,
    confirm_password: string
}

interface UserDetails {
    name: string
    email: string
    created_at: string
    updated_at: string
    authorization: {
        token: string
        type: string
    }
}

interface Options {
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
    body: string,
    headers: object
}

interface InitialState {
    value: {
        data: UserDetails,
        status: number
    },
    loading: 'idle' | 'pending' | 'success' | 'failed',
    logged_in: true | false,
    error: SerializedError
}

interface SeriesInitialState {
    all_series: {
        value: {
            data: SeriesInterface[],
            status: number
        },
        loading: 'idle' | 'pending' | 'success' | 'failed',
        error: SerializedError
    },
    single_series: {
        value: {
            data: SingleSeries,
            status: number
        },
        loading: 'idle' | 'pending' | 'success' | 'failed',
        error: SerializedError
    }
}



interface Input {
    id: number,
    name: string,
    label: string,
    type: string,
    errorMessage: string,
    pattern: undefined | string,
    autocomplete: string,
    required: boolean
}

interface AllSeriesPayload {
    data: SeriesInterface[],
    status: number
}

interface SingleSeriesPayload {
    data: SingleSeries,
    status: number
}

interface UserPayload {
    data: UserDetails,
    status: number
}

interface FunctionInterface {
    (e: React.ChangeEvent<HTMLInputElement>): void;
  }

export type { UserLogin, UserRegister, UserDetails, Options, InitialState, SeriesInitialState, Input, FunctionInterface, UserPayload, AllSeriesPayload, SingleSeriesPayload }