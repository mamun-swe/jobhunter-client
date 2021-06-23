import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from "react-icons-kit"
import { eye } from "react-icons-kit/feather"
import Preloader from '../../../../components/preloader/Index'

const Index = () => {
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

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
                            <tr>
                                <td className="text-center" style={{ minWidth: 50 }}><p>SL</p></td>
                                <td style={{ minWidth: 250 }}><p>Job</p></td>
                                <td className="text-center" style={{ minWidth: 150 }}>
                                    <Link to={`/company/job/${20}/applicants`}>
                                        <Icon icon={eye} size={20} style={{ color: '#fb246a' }} />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Index;