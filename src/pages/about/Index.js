import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Images } from '../../utils/Images'

import Header from '../../components/header/Index'
import Footer from '../../components/footer/Index'
import Preloader from '../../components/preloader/Index'

const Index = () => {
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    if (isLoading) return <Preloader />

    return (
        <div>
            <Header />
            <main>
                <div className="slider-area ">
                    <div className="single-slider section-overly slider-height2 d-flex align-items-center" style={{ backgroundImage: `url(${Images.SearchHeaderbg})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>About us</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="support-company-area fix section-padding2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6">
                                <div className="right-caption">

                                    <div className="section-tittle section-tittle2">
                                        <span>What we are doing</span>
                                        <h2>24k Talented people are getting Jobs</h2>
                                    </div>
                                    <div className="support-caption">
                                        <p className="pera-top">Mollit anim laborum duis au dolor in voluptate velit ess cillum dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit cillum.</p>
                                        <p>Mollit anim laborum.Duis aute irufg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur signjnt occa cupidatat non inulpadeserunt mollit aboru. temnthp incididbnt ut labore mollit anim laborum suis aute.</p>
                                        <Link to="/login" className="btn post-btn">Post a job</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="support-location-img">
                                    <img src={Images.Service} className="img-fluid" alt="" />
                                    <div className="support-img-cap text-center">
                                        <p>Since</p>
                                        <span>1994</span>
                                    </div>
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

export default Index