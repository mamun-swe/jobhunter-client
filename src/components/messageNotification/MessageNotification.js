import React, { useState, useEffect, useCallback } from 'react'
import './style.scss'
import Icon from 'react-icons-kit'
import { comment } from 'react-icons-kit/fa'
import { useHistory } from "react-router-dom"

import Requests from '../../utils/Requests/Index'

export const MessageNotification = () => {
    const history = useHistory()
    const [users, setUsers] = useState([])
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Fetch users
    const fetchData = useCallback(async () => {
        const response = await Requests.Chat.AllUsers(header)
        if (response) setUsers(response.data)
    }, [header])


    useEffect(() => {
        fetchData()
    }, [fetchData])


    return (
        <div className="message-notification-container">

            {/* clickable toggle button */}
            <button
                type="button"
                className="notification-button shadow"
                onClick={() => history.push("/home/account/applications")}
            >
                <Icon icon={comment} size={25} />
                <span className="notification-counter">
                    {users.length && users.length >= 10 ? "10+" : users.length}
                </span>
            </button>

            {/* Notifications container */}
            {/* {show ?
                <div className="notifications-container shadow">
                    {isLoading ? <p className="text-center">Loading ...</p> :
                        users && users.length ?
                            users.map((user, i) =>
                                <div className="notification-item d-flex"
                                    key={i}
                                    onClick={() => {
                                        setShow(false)
                                        setReciver(user)
                                        setLauncher(true)
                                    }}
                                >
                                    <div className="actor-image-container">
                                        <img src={user.image || Images.User} alt="..." />
                                    </div>
                                    <div className="actor-content-container">
                                        <p>{user.name}</p>
                                    </div>
                                </div>
                            ) : null}
                </div>
                : null} */}

            {/* {reciver ?
                <ChatLauncher
                    show={launcher}
                    author={author}
                    reciver={reciver}
                    onHide={() => setLauncher(false)}
                />
                : null} */}


            {/* // Chat container
                : show.type && show.value && show.type === "chat" && reciver ?
                    <ChatLauncher
                        show={show.type && show.value && show.type === "chat" && reciver ? true : false}
                        author={author}
                        reciver={reciver}
                        onHide={handleShow}
                    />

                    // <div className="chat-container shadow">

                    //     <div className="chat-header d-flex">
                    //         <div className="chat-header-back">
                    //             <button
                    //                 type="button"
                    //                 className="launcher-back-btn shadow-none"
                    //                 onClick={() => setShow({ type: "notification" })}
                    //             ><Icon icon={chevronLeft} size={20} /></button>
                    //         </div>
                    //         <div className="chat-header-avatar">
                    //             <img src={show.value.image || Images.User} className="img-fluid" alt="..." />
                    //         </div>
                    //         <div className="chat-header-person">
                    //             <h6 className="mb-0">{show.value.name}</h6>
                    //         </div>
                    //         <div className="chat-header-close ml-auto">
                    //             <button
                    //                 type="button"
                    //                 className="launcher-close-btn shadow-none"
                    //                 onClick={() => setShow({ type: null })}
                    //             ><Icon icon={x} size={20} /></button>
                    //         </div>
                    //     </div>


                    //     <div className="chat-body">

                    //         {messages && messages.length ? messages.map((message, i) =>
                    //             <div className="message-text-container" key={i}>
                    //                 <div className={"message-text " + message.type}>
                    //                     <p>{message.text}</p>
                    //                 </div>
                    //             </div>
                    //         ) : null}

                    //     </div>


                    //     <div className="chat-footer d-flex">
                    //         <div className="input-container flex-fill">
                    //             <input
                    //                 type="text"
                    //                 className="input-field"
                    //                 placeholder="Write a reply ..."
                    //                 onChange={event => setText(event.target.value)}
                    //             />
                    //         </div>

                    //         {text ?
                    //             <div className="submit-container">
                    //                 <button
                    //                     type="button"
                    //                     className="submit-button shadow-none"
                    //                     onClick={sendMessage}
                    //                 ><Icon icon={send} size={20} style={{ color: "#9c9a9a" }} /></button>
                    //             </div>
                    //             : null
                    //         }
                    //     </div>
                    // </div>
            //         : null
            // } */}
        </div>
    );
};
