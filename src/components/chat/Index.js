import React, { useState, useEffect, useCallback } from 'react'
import io from 'socket.io-client'
import { Launcher } from 'react-chat-window'
import Requests from '../../utils/Requests/Index'

let socket

const Index = (props) => {
    const ENDPOINT = 'https://ja.pranjolerp.com'
    // const ENDPOINT = 'http://localhost:4000'
    const [messageList, setMessageList] = useState([])
    const [header] = useState({
        headers: { Authorization: "Bearer " + localStorage.getItem('token') }
    })

    // Fetch previus messages
    const fetchData = useCallback(async () => {
        try {
            const response = await Requests.Chat.MyMessages(props.author, props.reciver._id, header)
            if (response.data && response.data.messages && response.data.messages.length) {
                setMessageList(response.data.messages)
            }
        } catch (error) {
            if (error) console.log(error)
        }
    }, [header, props.author, props.reciver._id])

    useEffect(() => {
        if (props.reciver) {
            fetchData()
            const room = {
                author: props.author,
                reciver: props.reciver
            }
            socket = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] })

            socket.emit("join", { room })
            socket.on("message", (message) => {
                setMessageList((exMessage) => [...exMessage, message])
            })
        }
    }, [fetchData, ENDPOINT, props.author, props.reciver])

    // Handle messge sent
    const _onMessageWasSent = message => {
        let messageText = {}
        messageText.author = props.author
        messageText.to = props.reciver._id
        messageText.message = message.data.text
        setMessageList([...messageList, message])

        socket.emit('message', messageText, (response) => {
            if (response) {
                console.log(response)
                console.log('Successfully message send')
            }
        })
    }

    // Handle click
    const handleClick = () => {
        setMessageList([])
        props.onHide()
    }

    return (
        <div>
            <Launcher
                agentProfile={{
                    teamName: props.reciver ? props.reciver.name : "Unknown",
                    imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                onMessageWasSent={_onMessageWasSent}
                messageList={messageList}
                showEmoji={false}
                isOpen={props.show}
                handleClick={handleClick}
            />
        </div>
    )
}

export default Index