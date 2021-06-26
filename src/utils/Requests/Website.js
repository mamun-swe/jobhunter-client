import Axios from 'axios'
import { api } from '../api'
import { toast } from 'react-toastify'
import { errorHandeller } from './Error'
import 'react-toastify/dist/ReactToastify.css'
toast.configure({ autoClose: 2000 })

// Index
const Jobs = async () => {
    try {
        const response = await Axios.get(`${api}website/jobs`)
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// Index
const ShowJob = async (id) => {
    try {
        const response = await Axios.get(`${api}website/jobs/${id}`)
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

const Website = {
    Jobs,
    ShowJob
}

export default Website