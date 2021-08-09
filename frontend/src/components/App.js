import React, { useEffect, useState } from "react"
import {BrowserRouter as Router} from "react-router-dom"
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Swipeable from "./Navigation/Swipeable"
import { Switch, Route } from "react-router-dom"
import homeURL from "./homeURL";

import Home from './Home/Home'
import About from "./About/About"
import Login from "./Login/Login"
import Logout from "./Login/Logout"
import Zach from "./Zach/Zach"
import Accounts from "./Accounts/Accounts"
import Signup from "./Login/Signup"
import Footer from "./Footer/Footer"
import AddAccount from "./Accounts/AddAccount";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        marginBottom:theme.spacing(8),
        minHeight: '100vh',
    },
    header: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    footer: {
        flexGrow: 1,
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
                <div className={classes.header}>
                    <Swipeable auth={isAuthenticated}/>
                </div>
                <div className={classes.content}>
                    <Switch className={classes.content}>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/accounts" component={Accounts}/>
                        <Route path="/login" component={() => <Login auth={isAuthenticated} setAuth={setAuthenticated} homeURL={homeURL}/>}/>
                        <Route path="/logout" component={() => <Logout auth={isAuthenticated} setAuth={setAuthenticated}/>}/>
                        <Route path="/zach" component={Zach}/>
                        <Route path="/signup" component={() => <Signup homeURL={homeURL}/>}/>
                        <Route path="/addaccount" component={AddAccount}/>
                    </Switch>
                </div>
                <Footer className={classes.footer}/>
            </Router>
        </ThemeProvider>
    )
}

export default App