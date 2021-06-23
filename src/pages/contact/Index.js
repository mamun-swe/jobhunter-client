
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-icons-kit'
import {
    home,
    smartphone,
    mail
} from 'react-icons-kit/feather'
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
                                        <h2>Contact us</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="contact-section">
                    <div className="container">

                        <div className="row">
                            <div className="col-12">
                                <h2 className="contact-title">Get in Touch</h2>
                            </div>
                            <div className="col-lg-8">
                                <form className="form-contact contact_form">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control w-100"
                                                    cols="30"
                                                    rows="9"
                                                    placeholder=" Enter Message" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control valid"
                                                    type="text"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control valid"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control" placeholder="Enter Subject" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3 offset-lg-1">
                                <div className="media contact-info">
                                    <span className="contact-info__icon">
                                        <Icon icon={home} size={28} />
                                    </span>
                                    <div className="media-body">
                                        <h3>Buttonwood, California.</h3>
                                        <p>Rosemead, CA 91770</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon">
                                        <Icon icon={smartphone} size={28} />
                                    </span>
                                    <div className="media-body">
                                        <h3>+1 253 565 2365</h3>
                                        <p>Mon to Fri 9am to 6pm</p>
                                    </div>
                                </div>
                                <div className="media contact-info">
                                    <span className="contact-info__icon">
                                        <Icon icon={mail} size={28} />
                                    </span>
                                    <div className="media-body">
                                        <h3>support@colorlib.com</h3>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Index;