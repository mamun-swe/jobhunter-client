import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import Requests from '../../utils/Requests/Index'

const Index = () => {
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) history.push("/home")
    }, [history])

    // Submit form
    const onSubmit = async data => {
        setLoading(true)
        await Requests.Auth.Reset(data)
        setLoading(false)
    }

    return (
        <div>
            <main>
                <div className="container auth-container py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow border-0">
                                <div className="card-header text-center bg-white">
                                    <h2 className="mb-0">Reset Password</h2>
                                    <p className="mb-0">Just enter e-mail, new password will sent.</p>
                                </div>
                                <div className="card-body p-4">
                                    <form className="form-contact contact_form" onSubmit={handleSubmit(onSubmit)}>

                                        {/* Email */}
                                        <div className="form-group">
                                            {errors.email && errors.email.message ? (
                                                <label className="text-danger">{errors.email && errors.email.message}</label>
                                            ) : <label>E-mail</label>}

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter e-mail"
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Invalid email address"
                                                    }
                                                })}
                                            />
                                        </div>

                                        <div className="text-right mb-4">
                                            <p>Back to <Link to="/">Login</Link></p>
                                        </div>

                                        <div className="form-group text-right mt-3">
                                            <button
                                                type="submit"
                                                className="button button-contactForm boxed-btn"
                                                disabled={isLoading}
                                            >{isLoading ? 'Loading ...' : 'Reset'}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Index;