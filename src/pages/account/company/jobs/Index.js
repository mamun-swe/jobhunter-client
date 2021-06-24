import React, { useEffect, useState, useCallback } from 'react'

import JobList from '../../../../components/jobs/Index'
import Preloader from '../../../../components/preloader/Index'
import Pagination from '../../../../components/pagination/Index'
import Requests from '../../../../utils/Requests/Index'

const Index = () => {
    const [jobs, setJobs] = useState([])
    const [pagination, setPagination] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Fetch data
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Company.JobIndex(header)
            if (response) {
                setJobs(response.data.jobs)
                setPagination(response.data.pagination)
            }
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
                    <Pagination paginate={pagination} />
                </div>
            </div>
        </div>
    )
}

export default Index;