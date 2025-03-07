import { fieldsProps } from "../../utils/types"
import styles from './index.module.scss'

export function UsernameField ({register, errors}:fieldsProps) {
    return (
        <>
            <div className={styles.wrapper_field}>
                <label 
                    htmlFor="username" 
                    className={styles.label_field}
                >
                    Username
                </label>
                <input 
                    id="username" 
                    type="text" 
                    className={styles.input}
                    {...register('username', {
                        required: "Field cannot be empty",
                        minLength: {
                            value: 3,
                            message: "Must be more than 3 characters"
                        },
                        maxLength: {
                            value: 16,
                            message: "Must not be more than 16 characters"
                        },
                    })}
                />
                {errors.username && <span className={styles.error_text}>{errors.username.message}</span>}
            </div>
        </>
    )
}