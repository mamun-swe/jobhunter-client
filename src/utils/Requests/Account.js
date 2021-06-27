import Axios from 'axios'
import { api } from '../api'
import { toast } from 'react-toastify'
import { errorHandeller } from './Error'
import 'react-toastify/dist/ReactToastify.css'
toast.configure({ autoClose: 2000 })

// Profile
const Profile = async (header) => {
    try {
        const response = await Axios.get(`${api}user/profile`, header)
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
        const response = await Axios.put(`${api}user/profile`, data, header)
        if (response.status === 201) return response
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// Password Update
const PasswordUpdate = async (data, header) => {
    try {
        const response = await Axios.put(`${api}user/password-update`, data, header)
        if (response.status === 201) return response
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// Applicants in job
const Applicants = async(id, header) => {
    try {
        const response = await Axios.get(`${api}user/job/${id}/applicants`, header)
        if (response.status === 200) return response
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// My Applications
const MyApplications = async(header) => {
    try {
        const response = await Axios.get(`${api}user/my-applications`, header)
        if (response.status === 200) return response
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// List of jobs
const JobIndex = async (header) => {
    try {
        const response = await Axios.get(`${api}user/job`, header)
        if (response.status === 200) return response
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// Create job
const CreateJob = async (data, header) => {
    try {
        const response = await Axios.post(`${api}user/job`, data, header)
        if (response.status === 201) return response
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

const Account = {
    Profile,
    ProfileUpdate,
    PasswordUpdate,
    Applicants,
    MyApplications,
    JobIndex,
    CreateJob
}

export default Account