import React, { useEffect, useState } from 'react'

import JobList from '../../../../components/jobs/Index'
import Preloader from '../../../../components/preloader/Index'
import Pagination from '../../../../components/pagination/Index'

const Recent = () => {
    const [jobs] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    if (isLoading) return <Preloader />

    return (
        <div>
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white p-4">
                    <h5 className="mb-0">Recent Jobs</h5>
                </div>
                <div className="card-body">
                    <JobList items={jobs} />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Recent;