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

// Show specific job
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

// Apply specific job
const ApplyJob = async (id, header) => {
    try {
        const response = await Axios.post(`${api}website/apply`, { jobId: id }, header)
        if (response.status === 201) {
            return response.data
        }
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// Search job
const Search = async (category, location) => {
    try {
        const response = await Axios.get(`${api}website/search?category=${category}&area=${location}`)
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// Post a comment
const Comment = async (data, header) => {
    try {
        const response = await Axios.post(`${api}website/comment`, data, header)
        if (response.status === 201) {
            return response
        }
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// Show profile
const Profile = async (id, header) => {
    try {
        const response = await Axios.get(`${api}website/profile/${id}`, header)
        if (response.status === 200) {
            return response
        }
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

const Website = {
    Jobs,
    ShowJob,
    ApplyJob,
    Search,
    Comment,
    Profile
}

export default Website