import React, { useEffect, useState } from "react"
import {BrowserRouter as Router} from "react-router-dom"
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Swipeable from "./Navigation/Swipeable"
import { Switch, Route } from "react-router-dom"

import Home from './Home/Home'
import About from "./About/About"
import Login from "./Login/Login"
import Logout from "./Login/Logout"
import Zach from "./Zach/Zach"
import Accounts from "./Accounts/Accounts"
import Signup from "./Login/Signup"

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}))

const theme = createTheme( {
    typography: {
        fontFamily: '"Source Sans Pro", sans-serif',
    },
})

function App () {
    const classes = useStyles()
    const [isAuthenticated, setAuthenticated] = useState(false)
    useEffect(() => {
        let token = localStorage.getItem('refresh_token')
        if (token) {
            setAuthenticated(true)
        }
      }, [])

    return (
        <ThemeProvider theme={theme}>
            <Router className={classes.container}>
                <div className={classes.content}>
                    <Swipeable auth={isAuthenticated}/>
                </div>
                <div className={classes.content}>
                    <Switch className={classes.content}>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/accounts" component={Accounts}/>
                        <Route path="/login" component={() => <Login auth={isAuthenticated} setAuth={setAuthenticated}/>}/>
                        <Route path="/logout" component={() => <Logout auth={isAuthenticated} setAuth={setAuthenticated}/>}/>
                        <Route path="/zach" component={Zach}/>
                        <Route path="/signup" component={Signup}/>
                    </Switch>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App