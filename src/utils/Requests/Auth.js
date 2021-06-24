import Axios from 'axios'
import { api } from '../api'
import { toast } from 'react-toastify'
import { errorHandeller } from './Error'
import 'react-toastify/dist/ReactToastify.css'
toast.configure({ autoClose: 2000 })

// Login
const Login = async (data) => {
    try {
        const response = await Axios.post(`${api}auth/login`, data)
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

// Register
const Register = async (data) => {
    try {
        const response = await Axios.post(`${api}auth/register`, data)
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        if (error) return errorHandeller(error)
    }
}

const Auth = {
    Login,
    Register
}

export default Auth