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
                    <h6 className="mb-0">Welcome <span className="text-capitalize">ABC inc.</span></h6>
                </div>
                <div className="card-body p-3">
                    <div>
                        <div className="item-container">
                            <div className="item-body">
                                <p><Icon icon={pieChart} size={20} className="mr-1" /> Total Jobs</p>
                                <h5>110.0</h5>
                            </div>
                        </div>

                        <div className="item-container">
                            <div className="item-body">
                                <p><Icon icon={checkCircle} size={20} className="mr-1" /> Approved Applicant</p>
                                <h5>110.0</h5>
                            </div>
                        </div>

                        <div className="item-container">
                            <div className="item-body">
                                <p><Icon icon={alertCircle} size={20} className="mr-1" /> Pending Applicant</p>
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
                                    ) : <label>Company Name</label>}

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Company name"
                                        {...register("name", {
                                            required: "Company name is required"
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


                            {/* Website address */}
                            <div className="col-12">
                                <div className="form-group">
                                    {errors.website && errors.website.message ? (
                                        <label className="text-danger">{errors.website && errors.website.message}</label>
                                    ) : <label>Website address</label>}

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter website address"
                                        {...register("website", { required: "Website address is required" })}
                                    />
                                </div>
                            </div>

                            {/* Company description */}
                            <div className="col-12">
                                <div className="form-group">
                                    {errors.description && errors.description.message ? (
                                        <label className="text-danger">{errors.description && errors.description.message}</label>
                                    ) : <label>Company description</label>}

                                    <textarea
                                        rows={6}
                                        className="form-control"
                                        placeholder="Enter company description"
                                        {...register("description", { required: "Company description is required" })}
                                    />
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