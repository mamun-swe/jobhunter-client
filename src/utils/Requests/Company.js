import Axios from 'axios'
import { api } from '../api'
import { toast } from 'react-toastify'
import { errorHandeller } from './Error'
import 'react-toastify/dist/ReactToastify.css'
toast.configure({ autoClose: 2000 })

// Profile
const Profile = async (header) => {
    try {
        const response = await Axios.get(`${api}company/profile`, header)
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// Profile Update
const ProfileUpdate = async (data, header) => {
    try {
        const response = await Axios.put(`${api}company/profile`, data, header)
        if (response.status === 201) return response
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// Password Update
const PasswordUpdate = async (data, header) => {
    try {
        const response = await Axios.put(`${api}company/password-update`, data, header)
        if (response.status === 201) return response
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// List of jobs
const JobIndex = async (header) => {
    try {
        const response = await Axios.get(`${api}company/job`, header)
        if (response.status === 200) return response
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// Create job
const CreateJob = async (data, header) => {
    try {
        const response = await Axios.post(`${api}company/job`, data, header)
        if (response.status === 201) return response
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

const Company = {
    Profile,
    ProfileUpdate,
    PasswordUpdate,
    JobIndex,
    CreateJob
}

export default Company