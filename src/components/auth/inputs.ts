import { Input } from "../../interfaces/interface";

const register_inputs: Input[] = [
    {
        id: 0,
        name: 'name',
        label: 'Enter Name',
        type: 'text',
        errorMessage: 'Name should be 3-30 characters long with no special characters',
        pattern: '^[A-Za-z]{3,16}$',
        required: true,
        autocomplete: 'name'
    },
    {
        id: 1,
        name: 'email',
        label: 'Enter Email',
        type: 'email',
        errorMessage: 'Email should be a valid email',
        pattern: undefined,
        required: true,
        autocomplete: 'email'
    },
    {
        id: 2,
        name: 'password',
        label: 'Enter Password',
        type: 'text',
        errorMessage: 'Password should be 8-20 characters long with at least 1 letter and 1 number',
        pattern: "^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,20}$",
        required: true,
        autocomplete: 'password'
    },
    {
        id: 3,
        name: 'confirm_password',
        label: 'Re-Type Your Password',
        type: 'password',
        errorMessage: 'Passwords do not match',
        pattern: undefined,
        required: true,
        autocomplete: 'password'
    }
]

const login_inputs: Input[] = [
    {
        id: 0,
        name: 'email',
        label: 'Enter Email',
        type: 'email',
        errorMessage: 'Email should be a valid email',
        pattern: undefined,
        required: true,
        autocomplete: 'email'
    },
    {
        id: 1,
        name: 'password',
        label: 'Enter Password',
        type: 'password',
        errorMessage: 'Password should be 8-20 characters long with at least 1 letter and 1 number',
        pattern: "^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,20}$",
        required: true,
        autocomplete: 'password'
    }
]

export { register_inputs, login_inputs }