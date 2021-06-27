import React, { useEffect, useState, useCallback } from 'react'
import { useQuery } from '../../components/query/Index'

import Header from '../../components/header/Index'
import Timeline from '../../components/timeline/Index'
import Footer from '../../components/footer/Index'
import Preloader from '../../components/preloader/Index'
import Requests from '../../utils/Requests/Index'

const Index = () => {
    const { category, location } = useQuery()
    const [jobs, setJobs] = useState([])
    const [isLoading, setLoading] = useState(true)

    // Fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Website.Search(category, location)
            if (response) setJobs(response.jobs)
            setLoading(false)
        } catch (error) {
            if (error) setLoading(false)
        }
    }, [category, location])

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
                        <div className="col-lg-8 pt-2">
                            <Timeline items={jobs} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Index