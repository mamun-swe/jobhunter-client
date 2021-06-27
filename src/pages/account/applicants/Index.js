import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Icon from "react-icons-kit"
import { eye } from "react-icons-kit/feather"
import Requests from '../../../utils/Requests/Index'
import Preloader from '../../../components/preloader/Index'

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
        <div className="apply-list">
            <div className="card border-0 shadow-sm">
                <div className="card-header border-0 bg-white p-4">
                    <h5 className="mb-0">Applicant List</h5>
                </div>
                <div className="card-body p-0">
                    <table className="table table-responsive-md table-borderless mb-0">
                        <thead>
                            <tr>
                                <td className="text-center"><p><b>SL</b></p></td>
                                <td><p><b>Job</b></p></td>
                                <td className="text-center"><p><b>Action</b></p></td>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs && jobs.length ?
                                jobs.map((item, i) =>
                                    <tr key={i}>
                                        <td className="text-center" style={{ minWidth: 50 }}><p>{i + 1}</p></td>
                                        <td style={{ minWidth: 250 }}>
                                            <p>{item.title}</p>
                                            <small className="text-muted">Applicants: {item.applicants && item.applicants ? item.applicants.length : 0}</small>
                                        </td>
                                        <td className="text-center" style={{ minWidth: 150 }}>
                                            <Link to={`/home/account/applicants/${item._id}`}>
                                                <Icon icon={eye} size={20} style={{ color: '#fb246a' }} />
                                            </Link>
                                        </td>
                                    </tr>
                                ) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Index;