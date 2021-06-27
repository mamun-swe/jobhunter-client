import React, { useEffect, useState, useCallback } from 'react'

import JobList from '../../../components/jobs/Index'
import Preloader from '../../../components/preloader/Index'
import Requests from '../../../utils/Requests/Index'

const Index = () => {
    const [jobs, setJobs] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Fetch data
    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await Requests.Account.JobIndex(header)
            if (response) setJobs(response.data.jobs)
            setLoading(false)
        } catch (error) {
            if (error) setLoading(false)
        }
    }, [header])

    useEffect(() => {
        fetchData()
    }, [header, fetchData])


    if (isLoading) return <Preloader />
    return (
        <div>
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white p-4">
                    <h5 className="mb-0">Opened Jobs</h5>
                </div>
                <div className="card-body">
                    <JobList items={jobs} />
                </div>
            </div>
        </div>
    )
}

export default Index;