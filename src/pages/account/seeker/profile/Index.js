import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Icon from 'react-icons-kit'
import {
    pieChart,
    checkCircle,
    alertCircle,
    dollarSign
} from 'react-icons-kit/feather'
import Preloader from '../../../../components/preloader/Index'

const Index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(true)
    const [isSubmit, setSubmit] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    // Submit form
    const onSubmit = async data => {
        try {
            setSubmit(true)
            console.log(data)

            setTimeout(() => {
                setSubmit(false)
            }, 1000)
        } catch (error) {
            if (error) console.log(error)
        }
    }

    if (isLoading) return <Preloader />

    return (
        <div className="dashboard-container">
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-0 px-4 pt-4 pb-0">
                    <h6 className="mb-0">Welcome <span className="text-capitalize">Abdullah Al Mamun</span></h6>
                </div>
                <div className="card-body p-3">
                    <div>
                        <div className="item-container">
                            <div className="item-body">
                                <p><Icon icon={pieChart} size={20} className="mr-1" /> Total Apply</p>
                                <h5>110.0</h5>
                            </div>
                        </div>

                        <div className="item-container">
                            <div className="item-body">
                                <p><Icon icon={checkCircle} size={20} className="mr-1" /> Approved</p>
                                <h5>110.0</h5>
                            </div>
                        </div>

                        <div className="item-container">
                            <div className="item-body">
                                <p><Icon icon={alertCircle} size={20} className="mr-1" /> Pending</p>
                                <h5>110.0</h5>
                            </div>
                        </div>

                        <div className="item-container">
                            <div className="item-body">
                                <p><Icon icon={dollarSign} size={20} className="mr-1" />Available Coin</p>
                                <h5>110.0</h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Information form */}
                <div className="card-body">
                    <form
                        className="form-contact contact_form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="row">

                            {/* Name */}
                            <div className="col-12 col-lg-6">
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
                            </div>

                            {/* E-mail */}
                            <div className="col-12 col-lg-6">
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
                            </div>


                            {/* Education */}
                            <div className="col-12">
                                <div className="form-group">
                                    {errors.education && errors.education.message ? (
                                        <label className="text-danger">{errors.education && errors.education.message}</label>
                                    ) : <label>Education</label>}

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter institution name"
                                        {...register("education", { required: "Education is required" })}
                                    />
                                </div>
                            </div>

                            {/* Category */}
                            <div className="col-12">
                                <div className="form-group">
                                    {errors.category && errors.category.message ? (
                                        <label className="text-danger">{errors.category && errors.category.message}</label>
                                    ) : <label>Job Category</label>}

                                    <select
                                        className="form-control"
                                        {...register("category", { required: "Category is required" })}
                                    >
                                        <option value="job seeker">Job Seeker</option>
                                        <option value="job post">Job Post</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group text-right mt-3">
                                    <button
                                        type="submit"
                                        className="button button-contactForm boxed-btn"
                                        disabled={isSubmit}
                                    >{isSubmit ? 'Loading ...' : 'Submit'}</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Index;