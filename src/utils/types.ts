import {UseFormRegister, FieldErrorsImpl} from 'react-hook-form'

// Form Auth

export type UserParamsForm = {
    username: string;
    email: string;
    password: string;
}

export type fieldsProps = {
    register: UseFormRegister<UserParamsForm>,
    errors: FieldErrorsImpl<{
        username: string;
        email: string;
        password: string;
    }>;
}