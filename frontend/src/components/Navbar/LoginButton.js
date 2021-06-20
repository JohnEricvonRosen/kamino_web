import React, {useState} from "react"
import {Link} from "react-router-dom"

import Login from "../Login/Login"

function LoginButton(){
    const [isLoggedin, setLoggedin] = useState(false)

    function login(){
        setLoggedin(prev => !prev)
    }

    function logout(){
        setLoggedin(prev => !prev)
    }

    return(
        <Link
        className="nav-links" 
        to={isLoggedin ? "/logout" : "/login"}
        onClick={isLoggedin ? logout : login}>
            {isLoggedin ? "Logout" : "Login"}
        </Link>
    )
}

export default LoginButton