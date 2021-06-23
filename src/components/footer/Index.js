import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { navigation } from 'react-icons-kit/feather'

const Index = () => {
    return (
        <footer className="mt-5">
            <div className="footer-area footer-bg footer-padding">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="single-footer-caption mb-30">
                                    <div className="footer-tittle">
                                        <h4>About Us</h4>
                                        <div className="footer-pera">
                                            <p>Heaven frucvitful doesn't cover lesser dvsays appear creeping seasons so behold.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Contact Info</h4>
                                    <ul>
                                        <li>
                                            <p>Address :Your address goes
                                                here, your demo address.</p>
                                        </li>
                                        <li><Link to="/">Phone : +8880 44338899</Link></li>
                                        <li><Link to="/">Email : info@colorlib.com</Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Important Link</h4>
                                    <ul>
                                        <li><Link to="/"> View Project</Link></li>
                                        <li><Link to="/">Contact Us</Link></li>
                                        <li><Link to="/">Testimonial</Link></li>
                                        <li><Link to="/">Proparties</Link></li>
                                        <li><Link to="/">Support</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Newsletter</h4>
                                    <div className="footer-pera footer-pera2">
                                        <p>Heaven fruitful doesn't over lesser in days. Appear creeping.</p>
                                    </div>

                                    <div className="footer-form" >
                                        <div id="mc_embed_signup">
                                            <form
                                                className="subscribe_form relative mail_part">
                                                <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                                    className="placeholder hide-on-focus"
                                                />
                                                <div className="form-icon">
                                                    <button type="submit" name="submit" id="newsletter-submit"
                                                        className="email_icon newsletter-submit button-contactForm"><Icon icon={navigation} size={16} /></button>
                                                </div>
                                                <div className="mt-10 info"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row footer-wejed justify-content-between">
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">

                            <div className="footer-logo mb-20">
                                <Link to="/"><img src="assets/img/logo/logo2_footer.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <div className="footer-tittle-bottom">
                                <span>5000+</span>
                                <p>Talented Hunter</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                            <div className="footer-tittle-bottom">
                                <span>451</span>
                                <p>Talented Hunter</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">

                            <div className="footer-tittle-bottom">
                                <span>568</span>
                                <p>Talented Hunter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Index;