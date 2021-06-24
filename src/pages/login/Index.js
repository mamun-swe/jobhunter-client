import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import Header from '../../components/header/Index'
import Footer from '../../components/footer/Index'
import Requests from '../../utils/Requests/Index'

const Index = () => {
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(false)

    // Submit form
    const onSubmit = async data => {
        try {
            setLoading(true)
            const response = await Requests.Auth.Login(data)
            if (response) {
                const token = response.token
                if (token) {
                    localStorage.setItem("token", token)
                    const decodeToken = jwtDecode(token)
                    if (decodeToken && decodeToken.role === "company") history.push("/company")
                    if (decodeToken && decodeToken.role === "seeker") history.push("/seeker")
                }
            }
            setLoading(false)
        } catch (error) {
            if (error) setLoading(false)
        }
    }

    return (
        <div>
            <Header />
            <main>
                <div className="container auth-container py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow border-0">
                                <div className="card-header text-center bg-white">
                                    <h2 className="mb-0">Login</h2>
                                    <p className="mb-0">Login your account & catch matched jobs.</p>
                                </div>
                                <div className="card-body p-4">
                                    <form
                                        className="form-contact contact_form"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >

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

                                        {/* Password */}
                                        <div className="form-group">
                                            {errors.password && errors.password.message ? (
                                                <label className="text-danger">{errors.password && errors.password.message}</label>
                                            ) : <label>Password</label>}

                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter password"
                                                {...register("password", {
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Minimun length 8 character"
                                                    }
                                                })}
                                            />
                                        </div>


                                        <div className="form-group text-right mt-3">
                                            <button
                                                type="submit"
                                                className="button button-contactForm boxed-btn"
                                                disabled={isLoading}
                                            >{isLoading ? 'Loading ...' : 'Login'}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Index;