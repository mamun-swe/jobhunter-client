import Axios from 'axios'
import { api } from '../api'
import { errorHandeller } from './Error'

// List of previus messgaes
const MyMessages = async (author, to, header) => {
    try {
        const response = await Axios.get(`${api}user/messages/${author}/${to}`, header)
        if (response.status === 200) return response
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

const Chat = {
    MyMessages
}

export default Chat