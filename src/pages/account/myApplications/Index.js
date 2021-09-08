import React, { useEffect, useState, useCallback } from 'react'
import jwtDecode from 'jwt-decode'
import { Icon } from 'react-icons-kit'
import { messageCircle } from 'react-icons-kit/feather'

import Requests from '../../../utils/Requests/Index'
import Preloader from '../../../components/preloader/Index'
import ChatLauncher from '../../../components/chat/Index'

const Index = () => {
    const [applications, setApplications] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [author, setAuthor] = useState(null)
    const [reciver, setReciver] = useState(null)
    const [open, setOpen] = useState(false)
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
        const token = localStorage.getItem("token")
        if (token) {
            const decode = jwtDecode(token)
            const myId = decode._id
            setAuthor(myId)
        }
        fetchData()
    }, [header, fetchData])

    // Handle message box open
    const handleOpen = data => {
        setReciver(data)
        setOpen(true)
    }

    // Handle close chat box
    const handleClose = () => {
        setOpen(true)
        setReciver(null)
    }

    if (isLoading) return <Preloader />

    return (
        <div className="apply-list">
            <div className="card">
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
                                            <div className="d-flex">
                                                <div><p>Company : {item.createdBy.name}</p></div>
                                                <div className="ml-auto">
                                                    <Icon
                                                        icon={messageCircle}
                                                        style={{ color: '#F4A261' }}
                                                        size={25}
                                                        onClick={() => handleOpen(item.createdBy)}
                                                    />
                                                </div>
                                            </div>
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

            {reciver ?
                <ChatLauncher
                    show={open}
                    author={author}
                    reciver={reciver}
                    onHide={handleClose}
                />
                : null}
        </div>
    );
};

export default Index;