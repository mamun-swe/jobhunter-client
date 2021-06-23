import React from 'react'
import { useForm } from 'react-hook-form'

const PasswordChange = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    // Submit data
    const onSubmit = (data) => {
        props.submit(data)
        reset()
    }

    return (
        <div className="form-container">
            <form
                className="form-contact contact_form"
                onSubmit={handleSubmit(onSubmit)}
            >

                {/* Old Password */}
                <div className="form-group mb-4">
                    {errors.oldPassword && errors.oldPassword.message ?
                        <small className="text-danger">{errors.oldPassword && errors.oldPassword.message}</small>
                        : <small>Old Password</small>}

                    <input
                        type="password"
                        className={errors.oldPassword ? "form-control shadow-none error" : "form-control shadow-none"}
                        placeholder="*****"
                        {...register("oldPassword", {
                            required: "Old password is required",
                            minLength: {
                                value: 8,
                                message: "Minimun length 8 character"
                            }
                        })}
                    />
                </div>

                {/* New Password */}
                <div className="form-group mb-4">
                    {errors.newPassword && errors.newPassword.message ?
                        <small className="text-danger">{errors.newPassword && errors.newPassword.message}</small>
                        : <small>New password</small>}

                    <input
                        type="password"
                        className={errors.newPassword ? "form-control shadow-none error" : "form-control shadow-none"}
                        placeholder="*****"
                        {...register("newPassword", {
                            required: "New password is required",
                            minLength: {
                                value: 8,
                                message: "Minimun length 8 character"
                            }
                        })}
                    />
                </div>

                <div className="text-right">
                    <button
                        type="submit"
                        className="btn shadow-none submit-btn"
                        disabled={props.loading}
                    >
                        {props.loading ? 'Saving ...' : 'Save'}
                    </button>
                </div>
            </form>

        </div>
    )
}


export default PasswordChange