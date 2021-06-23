import React from 'react'
import { Link } from 'react-router-dom';
import { Images } from '../../utils/Images'

const Index = () => {
    return (
        <section className="featured-job-area feature-padding">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>Recent Job</span>
                            <h2>Featured Jobs</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10">

                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                    <Link to="/"><img src={Images.Job1} className="img-fluid" alt="" /></Link>
                                </div>
                                <div className="job-tittle">
                                    <Link to="/"><h4>Digital Marketer</h4></Link>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <Link to="/">Full Time</Link>
                                <span>7 hours ago</span>
                            </div>
                        </div>

                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                <Link to="/"><img src={Images.Job2} className="img-fluid" alt="" /></Link>
                                </div>
                                <div className="job-tittle">
                                    <Link to="/"><h4>Digital Marketer</h4></Link>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <Link to="/">Full Time</Link>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                <Link to="/"><img src={Images.Job3} className="img-fluid" alt="" /></Link>
                                </div>
                                <div className="job-tittle">
                                    <Link to="/"><h4>Digital Marketer</h4></Link>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <Link to="/">Full Time</Link>
                                <span>7 hours ago</span>
                            </div>
                        </div>

                        <div className="single-job-items mb-30">
                            <div className="job-items">
                                <div className="company-img">
                                <Link to="/"><img src={Images.Job4} className="img-fluid" alt="" /></Link>
                                </div>
                                <div className="job-tittle">
                                    <Link to="/"><h4>Digital Marketer</h4></Link>
                                    <ul>
                                        <li>Creative Agency</li>
                                        <li><i className="fas fa-map-marker-alt"></i>Athens, Greece</li>
                                        <li>$3500 - $4000</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="items-link f-right">
                                <Link to="/">Full Time</Link>
                                <span>7 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Index;