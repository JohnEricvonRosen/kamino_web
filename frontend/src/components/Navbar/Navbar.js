import React from "react"
import { Link } from "react-router-dom"

import { MenuItems } from "./MenuItems"
import LoginButton from "./LoginButton"

function Navbar(){
    return (
        <div className="NavbarItems">
            <Link className="nav-logo" to="/">
                <h1>Kamino<i className="fa fa-hand-scissors-o fa-rotate-90"/></h1>
            </Link>
            <nav>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className={item.itemClassName} to={item.itemURL}>
                                    {item.itemName}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar