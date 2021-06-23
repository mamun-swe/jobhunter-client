import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import Header from '../../components/header/Index'
import Footer from '../../components/footer/Index'

const Index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(false)

    // Submit form
    const onSubmit = async data => {
        try {
            setLoading(true)
            console.log(data)

            setTimeout(() => {
                setLoading(false)
            }, 1000)
        } catch (error) {
            if (error) console.log(error)
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
                                    <h2 className="mb-0">Register</h2>
                                    <p className="mb-0">Create an account & catch matched jobs.</p>
                                </div>
                                <div className="card-body p-4">
                                    <form
                                        className="form-contact contact_form"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >


                                        {/* Name */}
                                        <div className="form-group">
                                            {errors.name && errors.name.message ? (
                                                <label className="text-danger">{errors.name && errors.name.message}</label>
                                            ) : <label>Name</label>}

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your name"
                                                {...register("name", {
                                                    required: "Name is required"
                                                })}
                                            />
                                        </div>


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

                                        {/* Created for */}
                                        <div className="form-group">
                                            {errors.createdFor && errors.createdFor.message ? (
                                                <label className="text-danger">{errors.createdFor && errors.createdFor.message}</label>
                                            ) : <label>Account created for</label>}

                                            <select
                                                className="form-control"
                                                {...register("createdFor", {
                                                    required: "Option is required"
                                                })}
                                            >
                                                <option value="seeker">Job Seeker</option>
                                                <option value="company">Company</option>
                                            </select>
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
                                            >{isLoading ? 'Loading ...' : 'Submit'}</button>
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