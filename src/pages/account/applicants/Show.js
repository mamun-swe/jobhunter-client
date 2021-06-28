import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import { messageCircle } from 'react-icons-kit/feather'
import { Launcher } from 'react-chat-window'
import jwtDecode from 'jwt-decode'

import Requests from '../../../utils/Requests/Index'
import Preloader from '../../../components/preloader/Index'

const Index = () => {
    const { id } = useParams()
    const [me, setMe] = useState(null)
    const [job, setJob] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const [user, setUser] = useState(null)
    const [open, setOpen] = useState(false)
    const [messageList, setMessageList] = useState([])

    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Fetch data
    const fetchData = useCallback(async () => {
        try {
            setLoading(true)
            const response = await Requests.Account.Applicants(id, header)
            if (response) {
                setJob(response.data.job)
            }
            setLoading(false)
        } catch (error) {
            if (error) setLoading(false)
        }
    }, [id, header])


    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            const decode = jwtDecode(token)
            const myId = decode._id
            setMe(myId)
        }
        fetchData()
    }, [id, header, fetchData])


    // Handle message box open
    const handleOpen = data => {
        setUser(data)
        setOpen(true)
    }

    // Handle close chat box
    const handleClose = () => {
        setOpen(true)
        setUser(null)
    }

    // Handle messge sent
    const _onMessageWasSent = message => {
        let messageText = {}
        messageText.author = me
        messageText.to = user._id
        messageText.message = message.data.text

        console.log(messageText);
        setMessageList([...messageList, message])
    }


    if (isLoading) return <Preloader />

    return (
        <div>
            {!job ? <p>No job found .</p> :
                <div className="card border-0 shadow">
                    <div className="card-header p-4 bg-white border-0">
                        <h5 className="mb-0">{job.applicants && job.applicants.length ? job.applicants.length : 0} Applicants in {job.title} Job</h5>
                    </div>

                    <div className="card-body px-0">
                        {job.applicants && job.applicants.map((items, i) =>
                            <div className="applicant-container d-flex border-bottom px-3 mb-3" key={i}>
                                <div className="pr-3"><h6>{i + 1}.</h6></div>
                                <div className="flex-fill">
                                    <h6 className="text-capitalize mb-3">{items.name}
                                        <Icon
                                            icon={messageCircle}
                                            style={{ color: '#F4A261' }}
                                            size={25}
                                            onClick={() => handleOpen(items)}
                                        />
                                    </h6>
                                    <p className="mb-0">E-mail: {items.email}</p>
                                    <p className="mb-0">Website: {items.website}</p>
                                    <p className="mb-0"><b>Description : </b></p>
                                    <p>{items.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            }

            {user ?
                <Launcher
                    agentProfile={{
                        teamName: user ? user.name : "Unknown",
                        imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                    }}
                    onMessageWasSent={_onMessageWasSent}
                    messageList={messageList}
                    showEmoji={false}
                    isOpen={open}
                    handleClick={handleClose}
                />
                : null}
        </div>
    )
}

export default Index;