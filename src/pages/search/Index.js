import React, { useEffect, useState } from 'react'
import { Images } from '../../utils/Images'

import Header from '../../components/header/Index'
import Footer from '../../components/footer/Index'
import Preloader from '../../components/preloader/Index'
import Pagination from '../../components/pagination/Index'
import JobList from '../../components/jobs/Index'
import SearchForm from '../../components/search/Index'

const Index = () => {
    const [isLoading, setLoading] = useState(true)
    const [jobs] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

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

                {/* Header */}
                <div className="slider-area">
                    <div className="single-slider section-overly slider-height2 d-flex align-items-center" style={{ backgroundImage: `url(${Images.SearchHeaderbg})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="hero-cap text-center">
                                        <h2>Get your job</h2>
                                    </div>
                                </div>

                                {/* Search form */}
                                <div className="col-12 col-xl-8 m-auto pt-3">
                                    <SearchForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="job-listing-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <section className="featured-job-area">
                                    <div className="container">

                                        {/* Total results */}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="count-job mb-35">
                                                    <span>39, 782 Jobs found</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* jobs list */}
                                        <JobList items={jobs} />

                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <Pagination />

            </main>
            <Footer />
        </div>
    )
}

export default Index;