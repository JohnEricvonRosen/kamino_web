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
// import Zach from "./Zach/Zach"
import Accounts from "./Accounts/Accounts"
import Signup from "./Login/Signup"
import Footer from "./Footer/Footer"
import AddAccount from "./Accounts/AddAccount";
import Instaacount from "./Accounts/Instaaccount";

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh',
        position: 'relative',
    },
    content: {
        minHeight: window.innerHeight - theme.spacing(15),
        padding: theme.spacing(3),
    },
    header: {
        padding: theme.spacing(3),
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        height: theme.spacing(8)
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
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/accounts" exact component={Accounts}/>
                        <Route path="/login" component={() => <Login auth={isAuthenticated} setAuth={setAuthenticated} homeURL={homeURL}/>}/>
                        <Route path="/logout" component={() => <Logout auth={isAuthenticated} setAuth={setAuthenticated}/>}/>
                        {/* <Route path="/zach" component={Zach}/> */}
                        <Route path="/signup" component={() => <Signup homeURL={homeURL}/>}/>
                        <Route path="/addaccount" component={AddAccount}/>
                        <Route path="/accounts/:slug" children={<Instaacount/>}/>
                    </Switch>
                </div>
                <Footer className={classes.footer}/>
            </Router>
        </ThemeProvider>
    )
}

export default App