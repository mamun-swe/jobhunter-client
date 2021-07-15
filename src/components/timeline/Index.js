import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HtmlParser from 'react-html-parser'
import { toast } from 'react-toastify'
import { formatDateWithAMPM, StringShort } from '../../utils/_helpers'
import Requests from '../../utils/Requests/Index'

const Index = (props) => {
    const [isLoading, setLoading] = useState({ jobId: null, loading: false })
    const [comment, setComment] = useState({ jobId: null, value: null })
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Submit form
    const onSubmit = async event => {
        try {
            event.preventDefault()

            const formData = {
                jobId: comment.jobId,
                comment: comment.value
            }

            setLoading({ jobId: comment.jobId, loading: true })
            const response = await Requests.Website.Comment(formData, header)
            if (response) {
                toast.success(response.data.message)
                props.refetch()
            }
            setLoading({ jobId: null, loading: false })
        } catch (error) {
            if (error) setLoading({ jobId: null, loading: false })
        }
    }

    return (
        <section className="py-5">
            {props.items && props.items.length ?
                props.items.map((item, i) =>
                    <div className="card border-0 shadow single-job-card mb-30" key={i}>

                        <div className="card-header p-4">
                            <div className="d-flex">
                                <div className="name-circle shadow-sm rounded-circle flex-center flex-column text-center">
                                    <h5 className="text-uppercase mb-0">{StringShort(item.createdBy.name)}</h5>
                                </div>
                                <div className="pl-3">
                                    <Link to={`/home/job/${item._id}`}><h6>{item.title}</h6></Link>

                                    <Link to={`/home/profile/${item.createdBy._id}`}>
                                        <p>{item.createdBy.name}</p>
                                    </Link>
                                </div>
                                <div className="ml-auto"><p>{item.jobType}</p></div>
                            </div>
                        </div>

                        <div className="card-body p-4">
                            <small className="mb-0">Location: {item.location}, {item.area}</small>
                            <br />
                            <small>Salary Range: Tk. {item.startSalary} - Tk. {item.endSalary} <span className="text-capitalize">{item.salaryType}</span></small>

                            <p className="mt-3 mb-0"><b>Job Description</b></p>
                            <p className="mb-4">{item.description ? HtmlParser(item.description) : null}</p>

                            <small>Posted on: {formatDateWithAMPM(item.createdAt)}</small>
                            <br />
                            <small>Expired at: {formatDateWithAMPM(item.expiredAt)}</small>
                        </div>

                        <div className="card-footer p-4">

                            {/* Comment form */}
                            <form onSubmit={onSubmit}>
                                <div className="d-flex">
                                    <div className="flex-fill">
                                        <input
                                            type="text"
                                            className="form-control shadow-none"
                                            placeholder="Write comment ..."
                                            onChange={(event) => setComment({ jobId: item._id, value: event.target.value })}
                                        />
                                    </div>
                                    <div className="pl-2">
                                        <button
                                            type="submit"
                                            className="btn shadow-none"
                                            disabled={!comment.value || isLoading.loading}
                                        >{isLoading.jobId === item._id && isLoading.loading ? "Posting ..." : "Post"}</button>
                                    </div>
                                </div>
                            </form>

                            {/* Comments section */}
                            <div className="comments-section mt-3">
                                <small className="text-muted">Comments {item.comments && item.comments.length ? item.comments.length : 0}</small>

                                {item.comments && item.comments.length ?
                                    item.comments.map((data, j) =>
                                        <div className="comment-container mb-3" key={j}>
                                            <div className="d-flex">
                                                <div className="name-circle shadow-sm rounded-circle flex-center flex-column text-center">
                                                    <h5 className="text-uppercase mb-0">{data.user ? StringShort(data.user.name) : null}</h5>
                                                </div>
                                                <div className="pl-3">
                                                    <h6>{data.user ? data.user.name : null}</h6>
                                                </div>
                                            </div>

                                            <div className="pl-5">
                                                <p className="mb-0">{data.comment}</p>
                                            </div>
                                        </div>
                                    ) : null}

                            </div>
                        </div>
                    </div>
                ) : null}
        </section>
    )
}


export default Index;