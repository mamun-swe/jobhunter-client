import React from 'react'
import { Link } from 'react-router-dom';
import { Images } from '../../utils/Images'

const Index = () => {
    return (
        <div className="our-services section-pad-t30">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center">
                            <span>FEATURED TOURS Packages</span>
                            <h2>Browse Top Categories </h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-contnet-center">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <img src={Images.Design} className="img-fluid mb-3" alt="..." />
                            </div>
                            <div className="services-cap">
                                <h5><Link to="job_listing.html">Design & Creative</Link></h5>
                                <span>(653)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <img src={Images.Desktop} className="img-fluid mb-3" alt="..." />
                            </div>
                            <div className="services-cap">
                                <h5><Link to="job_listing.html">Design & Development</Link></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <img src={Images.Marketing} className="img-fluid mb-3" alt="..." />
                            </div>
                            <div className="services-cap">
                                <h5><Link to="job_listing.html">Sales & Marketing</Link></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <img src={Images.Mobile} className="img-fluid mb-3" alt="..." />
                            </div>
                            <div className="services-cap">
                                <h5><Link to="job_listing.html">Mobile Application</Link></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <img src={Images.Construction} className="img-fluid mb-3" alt="..." />
                            </div>
                            <div className="services-cap">
                                <h5><Link to="job_listing.html">Construction</Link></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <img src={Images.IT} className="img-fluid mb-3" alt="..." />
                            </div>
                            <div className="services-cap">
                                <h5><Link to="job_listing.html">Information Technology</Link></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <img src={Images.RealEstate} className="img-fluid mb-3" alt="..." />
                            </div>
                            <div className="services-cap">
                                <h5><Link to="job_listing.html">Real Estate</Link></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="single-services text-center mb-30">
                            <div className="services-ion">
                                <img src={Images.Writting} className="img-fluid mb-3" alt="..." />
                            </div>
                            <div className="services-cap">
                                <h5><Link to="job_listing.html">Content Writer</Link></h5>
                                <span>(658)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="browse-btn2 text-center mt-50">
                            <Link to="/search-results" className="border-btn2">Browse All Sectors</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;