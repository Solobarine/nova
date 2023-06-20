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

interface Options {
    method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
    body: string,
    headers: object
}

interface InitialState {
    value: {
        data: string[],
        status: number
    },
    loading: 'idle' | 'pending' | 'success' | 'failed',
    logged_in: true | false,
    error: string[]
}

interface SeriesInitialState {
    all_series: {
        value: {
            data: SeriesInterface[],
            status: number
        },
        loading: 'idle' | 'pending' | 'success' | 'failed',
        error: string[]
    },
    single_series: {
        value: {
            data: SingleSeries,
            status: number
        },
        loading: 'idle' | 'pending' | 'success' | 'failed',
        error: string[]
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

interface FunctionInterface {
    (e: React.ChangeEvent<HTMLInputElement>): void;
  }

export type { UserLogin, UserRegister, Options, InitialState, SeriesInitialState, Input, FunctionInterface }