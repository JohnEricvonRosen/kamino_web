import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Navbar from "./Navbar/Navbar"
import About from "./About/About"
import Home from "./Home/Home"
import Contact from "./Contact/Contact"
import Login from "./Login/Login"
import Logout from "./Login/Logout"

function App () {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
            </Switch>
        </Router>
    )
}

export default App