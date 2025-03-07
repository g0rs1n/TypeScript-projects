import { fieldsProps } from "../../utils/types"
import styles from './index.module.scss'

export function EmailField ({register, errors}:fieldsProps) {
    return (
        <>
            <div className={styles.wrapper_field}>
                <label 
                    htmlFor="email" 
                    className={styles.label_field}
                >
                    Email
                </label>
                <input 
                    id="email" 
                    type="email" 
                    className={styles.input}
                    {...register('email', {
                        required: 'Field cannot be empty',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Invalid email type'
                        },
                    })}
                />
                {errors.email && <span className={styles.error_text}>{errors.email.message}</span>}
            </div>
        </>
    )
}