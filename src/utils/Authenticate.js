export const isLoggedin = (requestedRole) => {
    const storedRole = localStorage.getItem('role')

    if (storedRole && storedRole === requestedRole) {
        return true
    }
    return false
};