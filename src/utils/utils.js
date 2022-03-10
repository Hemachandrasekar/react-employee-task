export const checkLocalStorage = () => {
    if (localStorage.getItem('isLoggedIn')) {
        return true
    }else return false
}