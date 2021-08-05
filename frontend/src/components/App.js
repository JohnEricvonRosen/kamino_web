import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import NavDrawer from './Navigation/NavDrawer'
import NavSwipeableDrawer from "./Navigation/NavSwipeableDrawer";

import { Switch, Route } from "react-router-dom"

import Home from './Home/Home'
import About from "./About/About"
import Login from "./Login/Login"
import Logout from "./Login/Logout"
import Zach from "./Zach/Zach"
import Accounts from "./Accounts/Accounts"
import Signup from "./Login/Signup"

const content = (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/accounts" component={Accounts}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/zach" component={Zach}/>
        <Route path="/signup" component={Signup}/>
    </Switch>
)

const theme = createTheme ({
    typography: {
        fontFamily: '"Source Sans Pro", sans-serif',
    }
})

function App () {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                {/* <NavSwipeableDrawer/> */}
                <NavDrawer content={content}/>
            </Router>
        </ThemeProvider>
    )
}

export default App