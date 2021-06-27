import React, { useEffect, useState, useCallback } from 'react'

import Header from '../../components/header/Index'
import Search from '../../components/search/Index'
import Timeline from '../../components/timeline/Index'
import Footer from '../../components/footer/Index'
import Preloader from '../../components/preloader/Index'
import Requests from '../../utils/Requests/Index'

const Index = () => {
    const [jobs, setJobs] = useState([])
    const [isLoading, setLoading] = useState(true)

    // Fetch data
    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await Requests.Website.Jobs()
            if (response) setJobs(response.jobs)
            setLoading(false)
        } catch (error) {
            if (error) setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    if (isLoading) return <Preloader />

    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 pt-5">
                            <Search />
                            <Timeline items={jobs} refetch={fetchData} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Index;