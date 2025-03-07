import { fieldsProps } from "../../utils/types"
import styles from './index.module.scss'

export function PasswordField ({register, errors}:fieldsProps) {
    return (
        <>
            <div className={styles.wrapper_field}>
                <label 
                    htmlFor="password" 
                    className={styles.label_field}
                >
                    Password
                </label>
                <input
                    id="password" 
                    type="password" 
                    className={styles.input}
                    {...register('password', {
                        required: 'This field must not be empty',
                        minLength: {
                            value: 8,
                            message: "Must be more than 8 characters"
                        },
                        maxLength: {
                            value: 32,
                            message: "Must not be more than 32 characters"
                        }
                    })}
                />
                {errors.password && <span className={styles.error_text}>{errors.password.message}</span>}
            </div>
        </>
    )
}