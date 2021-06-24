import React, { useEffect, useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import Icon from 'react-icons-kit'
import {
    pieChart,
    checkCircle,
    alertCircle,
    dollarSign
} from 'react-icons-kit/feather'
import { toast } from 'react-toastify'
import Preloader from '../../../../components/preloader/Index'
import Requests from '../../../../utils/Requests/Index'

const Index = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setLoading] = useState(true)
    const [isSubmit, setSubmit] = useState(false)
    const [company, setCompany] = useState(null)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Fetch data
    const fetchData = useCallback(async () => {
        const response = await Requests.Company.Profile(header)
        if (response) setCompany(response.company)
        setLoading(false)
    }, [header])

    useEffect(() => {
        fetchData()
    }, [header, fetchData])


    // Submit form
    const onSubmit = async data => {
        try {
            setSubmit(true)
            const response = await Requests.Company.ProfileUpdate(data, header)
            if (response.status === 201) {
                toast.success(response.data.message)
                setSubmit(false)
            }
        } catch (error) {
            if (error) setSubmit(false)
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
                                        defaultValue={company ? company.name : null}
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
                                        disabled
                                        defaultValue={company ? company.email : null}
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
                                        defaultValue={company ? company.website : null}
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
                                        defaultValue={company ? company.description : null}
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