import React, { useEffect, useState, useCallback } from 'react'
import { Form } from "react-bootstrap"

import Header from '../../components/header/Index'
import Search from '../../components/search/Index'
import Timeline from '../../components/timeline/Index'
import Footer from '../../components/footer/Index'
import Preloader from '../../components/preloader/Index'
import Requests from '../../utils/Requests/Index'

const Index = () => {
    const [jobs, setJobs] = useState([])
    const [filterJobs, setFilterJobs] = useState(jobs)
    const [nature, setNature] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const items = [
        { label: "Full time", value: "Full time" },
        { label: "Part-time", value: "Part-time" }
    ]

    // Fetch data
    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await Requests.Website.Jobs()
            if (response) {
                setJobs(response.jobs)
                setFilterJobs(response.jobs)
            }
            setLoading(false)
        } catch (error) {
            if (error) setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    // Job nature filter
    const handleNatureFilter = async (value) => {
        if (jobs && jobs.length) {
            const results = await jobs.filter(x => x.jobType === value)
            setFilterJobs(results)
        }
        setNature(value)
    }

    if (isLoading) return <Preloader />

    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto pt-5">
                            <Search />
                        </div>
                    </div>

                    <div className="row pt-5">

                        {/* Filter column */}
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="card border-0 shadow">
                                <div className="card-body">

                                    {/* Job type filter */}
                                    <h6 className="font-weight-bold mb-2">Filter by job type.</h6>
                                    {items.map((item, i) => (
                                        <div key={i} className="font-sm mb-2">
                                            <Form.Check
                                                id={i}
                                                type='checkbox'
                                                value={item.value}
                                                label={item.label}
                                                checked={nature === item.value}
                                                onChange={() => handleNatureFilter(item.value)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Timeline container */}
                        <div className="col-lg-8">
                            {filterJobs && filterJobs.length ?
                                <Timeline items={filterJobs} refetch={fetchData} />
                                :
                                <h5 className="font-weight-bold text-center">No {nature} job available.</h5>
                            }
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Index;