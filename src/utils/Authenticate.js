import jwtDecode from 'jwt-decode'

export const isLoggedin = (requestedRole) => {
    const token = localStorage.getItem("token")
    if (token) {
        const decodeToken = jwtDecode(token)
        if (decodeToken && decodeToken.role === requestedRole) {
            return true
        }
    }
    return false
};