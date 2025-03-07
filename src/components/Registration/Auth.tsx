import {useForm} from 'react-hook-form'
import { useState } from 'react'
import { UserParamsForm } from '../../utils/types'
import { UsernameField } from './UsernameField'
import { EmailField } from './EmailField'
import { PasswordField } from './PasswordField'
import styles from './index.module.scss'

export default function Auth () {

    const [isAuthForm, setIsAuthForm] = useState(true)
    const {
        register, 
        handleSubmit, 
        formState: {errors}
    } = useForm<UserParamsForm>({
        mode: "onBlur"
    })
    const formFieldProps = {errors, register}

    const onSubmit = (data: UserParamsForm) => {
        console.log(data)
    }

    const handleOnCLickLink = () => {
        setIsAuthForm(!isAuthForm)
    }

    return (
        <>
            <div className={styles.container}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    {isAuthForm && <UsernameField {...formFieldProps}/>}
                    <EmailField {...formFieldProps}/>
                    <PasswordField {...formFieldProps}/>
                    <div className={styles.wrapperButton}>
                        <button className={styles.button}>{isAuthForm ? "Sign up" : "Login"}</button>
                        <div className={styles.titleFooter}>
                            <p className={styles.titleFooter_p}>
                                {isAuthForm ?  "Already have an account?" : "Don't have an account yet?"}
                            </p>
                            <span onClick={handleOnCLickLink} className={styles.titleFooter_span}>
                                {isAuthForm ? "Sign up" : "Login up"}
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}