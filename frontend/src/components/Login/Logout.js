import React, { useEffect } from "react"
import axiosInstance from "../axios"
import { useHistory } from "react-router"
import CircularProgress from '@material-ui/core/CircularProgress';

const Logout = (props) => {
    const history = useHistory()

    useEffect(() => {
        const response = axiosInstance.post('user/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
        })
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        axiosInstance.defaults.headers['Authorization'] = null
        history.push('/')
        props.setAuth(false)
    })
    return(
        <CircularProgress/>
    )
}

export default Logout