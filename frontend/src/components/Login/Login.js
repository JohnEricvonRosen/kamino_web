import React, {useState} from "react"
import { Link } from "react-router-dom"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [hidden, setHidden] = useState(false)

    return(
        <div>
            <h1>This is the login</h1>
            <form>
                <label>Username: </label>
                <input
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                />
                <br/>
                <label>Password: </label>
                <input
                    type={hidden ? "text" : "password"}
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <input
                    type="checkbox"
                    name="hidden"
                    value={hidden}
                    onChange={() => {setHidden(!hidden)}}
                />
            </form>
        </div>
    )
}

export default Login