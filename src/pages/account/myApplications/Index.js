import React, { useEffect, useState, useCallback } from 'react'
import Requests from '../../../utils/Requests/Index'
import Preloader from '../../../components/preloader/Index'

const Index = () => {
    const [applications, setApplications] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Fetch data
    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await Requests.Account.MyApplications(header)
            if (response) setApplications(response.data.applications)
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
                    <h5 className="mb-0">My Applications</h5>
                </div>
                <div className="card-body p-0">
                    <table className="table table-responsive-md table-borderless mb-0">
                        <thead>
                            <tr>
                                <td className="text-center"><p><b>SL</b></p></td>
                                <td><p><b>Job</b></p></td>
                            </tr>
                        </thead>
                        <tbody>
                            {applications && applications.length ?
                                applications.map((item, i) =>
                                    <tr key={i}>
                                        <td className="text-center" style={{ minWidth: 50 }}><p>{i + 1}</p></td>
                                        <td style={{ minWidth: 250 }}>
                                            <p>Company : {item.createdBy.name}</p>
                                            <p>Website : {item.createdBy.website}</p>
                                            <p>Position : {item.title}</p>
                                            <p>Location : {item.location}, {item.area}</p>
                                        </td>
                                    </tr>
                                ) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Index;