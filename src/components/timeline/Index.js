import React from 'react'
import { Link } from 'react-router-dom'
import HtmlParser from 'react-html-parser'
import { formatDateWithAMPM } from '../../utils/_helpers'

const Index = (props) => {
    return (
        <section className="py-5">
            {props.items && props.items.length ?
                props.items.map((item, i) =>
                    <div className="card border-0 shadow single-job-card mb-30" key={i}>

                        <div className="card-header p-4">
                            <div className="d-flex">
                                <div className="name-circle shadow-sm rounded-circle flex-center flex-column text-center">
                                    <h5 className="text-uppercase mb-0">a</h5>
                                </div>
                                <div className="pl-3">
                                    <Link to={`/home/job/${item._id}`}><h6>{item.title}</h6></Link>
                                    <p>{item.company.name}</p>
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
                            <form>
                                <div className="d-flex">
                                    <div className="flex-fill">
                                        <input
                                            type="text"
                                            className="form-control shadow-none"
                                            placeholder="Write comment ..."
                                        />
                                    </div>
                                    <div className="pl-2">
                                        <button
                                            type="submit"
                                            className="btn shadow-none"
                                        >Post</button>
                                    </div>
                                </div>
                            </form>

                            {/* Comments section */}
                            <div className="comments-section mt-3">
                                <small className="text-muted">Comments</small>
                                <div className="comment-container mb-3">
                                    <div className="d-flex">
                                        <div className="name-circle shadow-sm rounded-circle flex-center flex-column text-center">
                                            <h5 className="text-uppercase mb-0">a</h5>
                                        </div>
                                        <div className="pl-3">
                                            <h6>abc inc.</h6>
                                        </div>
                                    </div>

                                    <div className="pl-5">
                                        <p className="mb-0">What is Lorem Ipsum Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </div>
                                <div className="comment-container mb-3">
                                    <div className="d-flex">
                                        <div className="name-circle shadow-sm rounded-circle flex-center flex-column text-center">
                                            <h5 className="text-uppercase mb-0">a</h5>
                                        </div>
                                        <div className="pl-3">
                                            <h6>abc inc.</h6>
                                        </div>
                                    </div>

                                    <div className="pl-5">
                                        <p className="mb-0">What is Lorem Ipsum Lorem Ipsum is simply dummy text</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
        </section>
    )
}


export default Index;