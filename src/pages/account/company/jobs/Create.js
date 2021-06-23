import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import RichText from '../../../../components/richText/Index'

const Create = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [description, setDescription] = useState({ value: null, error: null })
    const [isLoading, setLoading] = useState(false)

    // Submit data
    const onSubmit = async (data) => {
        try {
            if (!description.value) return setDescription({ ...description, error: "Description is required." })

            setLoading(true)
            const formData = {
                ...data,
                description: description.value
            }

            console.log(formData)

            setTimeout(() => {
                setLoading(false)
                reset()
            }, 1000);
        } catch (error) {
            if (error) console.log(error)
        }
    }

    return (
        <div>
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white p-4">
                    <h5>Open New Job</h5>
                </div>
                <div className="card-body p-4">
                    <div className="form-container">
                        <form
                            className="form-contact contact_form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="row">

                                {/* Job Title */}
                                <div className="col-12">
                                    <div className="form-group mb-4">
                                        {errors.title && errors.title.message ?
                                            <label className="text-danger">{errors.title && errors.title.message}</label>
                                            : <label>Job Title</label>}

                                        <input
                                            type="text"
                                            className={errors.title ? "form-control shadow-none error" : "form-control shadow-none"}
                                            placeholder="Enter job title"
                                            {...register("title", { required: "Job title is required" })}
                                        />
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="col-12">
                                    <div className="form-group mb-4">
                                        {errors.location && errors.location.message ?
                                            <label className="text-danger">{errors.location && errors.location.message}</label>
                                            : <label>Job Location</label>}

                                        <input
                                            type="text"
                                            className={errors.location ? "form-control shadow-none error" : "form-control shadow-none"}
                                            placeholder="Enter job location"
                                            {...register("location", { required: "Job location is required" })}
                                        />
                                    </div>
                                </div>

                                {/* Job category */}
                                <div className="col-12">
                                    <div className="form-group">
                                        {errors.category && errors.category.message ? (
                                            <label className="text-danger">{errors.category && errors.category.message}</label>
                                        ) : <label>Job category</label>}

                                        <select
                                            className="form-control"
                                            {...register("category", {
                                                required: "Category is required"
                                            })}
                                        >
                                            <option value="IT">IT</option>
                                            <option value="Software">Software</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Salary start from */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group mb-4">
                                        {errors.salaryStart && errors.salaryStart.message ?
                                            <label className="text-danger">{errors.salaryStart && errors.salaryStart.message}</label>
                                            : <label>Salary start from</label>}

                                        <input
                                            type="number"
                                            className={errors.salaryStart ? "form-control shadow-none error" : "form-control shadow-none"}
                                            placeholder="Enter salary start form"
                                            {...register("salaryStart", { required: "Salary start from is required" })}
                                        />
                                    </div>
                                </div>

                                {/* Salary end to */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group mb-4">
                                        {errors.salaryEnd && errors.salaryEnd.message ?
                                            <label className="text-danger">{errors.salaryEnd && errors.salaryEnd.message}</label>
                                            : <label>Salary end to</label>}

                                        <input
                                            type="number"
                                            className={errors.salaryEnd ? "form-control shadow-none error" : "form-control shadow-none"}
                                            placeholder="Enter salary end to"
                                            {...register("salaryEnd", { required: "Salary end to is required" })}
                                        />
                                    </div>
                                </div>

                                {/* Salary type */}
                                <div className="col-12">
                                    <div className="form-group">
                                        {errors.salaryType && errors.salaryType.message ? (
                                            <label className="text-danger">{errors.salaryType && errors.salaryType.message}</label>
                                        ) : <label>Salary type</label>}

                                        <select
                                            className="form-control"
                                            {...register("salaryType", {
                                                required: "Salary type is required"
                                            })}
                                        >
                                            <option value="Yearly">Yearly</option>
                                            <option value="Monthly">Monthly</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Job type */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group">
                                        {errors.type && errors.type.message ? (
                                            <label className="text-danger">{errors.type && errors.type.message}</label>
                                        ) : <label>Job type</label>}

                                        <select
                                            className="form-control"
                                            {...register("type", {
                                                required: "Type is required"
                                            })}
                                        >
                                            <option value="Full time">Full time</option>
                                            <option value="Part-time">Part-time</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Vacancy */}
                                <div className="col-12 col-lg-6">
                                    <div className="form-group mb-4">
                                        {errors.vacancy && errors.vacancy.message ?
                                            <label className="text-danger">{errors.vacancy && errors.vacancy.message}</label>
                                            : <label>Vacancy</label>}

                                        <input
                                            type="number"
                                            className={errors.vacancy ? "form-control shadow-none error" : "form-control shadow-none"}
                                            placeholder="Enter vacancy"
                                            {...register("vacancy", { required: "Vacancy is required" })}
                                        />
                                    </div>
                                </div>

                                {/* Expired at */}
                                <div className="col-12">
                                    <div className="form-group">
                                        {errors.expiredAt && errors.expiredAt.message ? (
                                            <label className="text-danger">{errors.expiredAt && errors.expiredAt.message}</label>
                                        ) : <label>Expired At</label>}

                                        <input
                                            type="date"
                                            className={errors.expiredAt ? "form-control shadow-none error" : "form-control shadow-none"}
                                            {...register("expiredAt", { required: "Expire time is required" })}
                                        />
                                    </div>
                                </div>

                                {/* Job Description */}
                                <div className="col-12">
                                    <div className="form-group">
                                        {description.error ? (
                                            <label className="text-danger">{description.error}</label>
                                        ) : <label>Job Description</label>}

                                        <RichText value={(data) => setDescription({ value: data, error: null })} />
                                    </div>
                                </div>

                                <div className="col-12 text-right">
                                    <div className="form-group text-right mt-3">
                                        <button
                                            type="submit"
                                            className="button button-contactForm boxed-btn"
                                            disabled={isLoading}
                                        >{isLoading ? 'Loading ...' : 'Create'}</button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Create;