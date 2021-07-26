import React from "react"

import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied'

export const AnonItmes = [
    {
        itemName: "Home",
        itemURL: "/",
        itemIcon: <HomeIcon/>,
        itemHidden: false
    },
    {
        itemName: "About",
        itemURL: "/about",
        itemIcon: <InfoIcon/>,
        itemHidden: false
    },
    {
        itemName: "Zach",
        itemURL: "/zach",
        itemIcon: <SentimentVerySatisfiedIcon/>,
        itemHidden: true
    }
]

export const UserItems =[
    {
        itemName: "Accounts",
        itemURL: "/accounts",
        itemIcon: <AccountBoxIcon/>,
        itemHidden: false
    },
    {
        itemName: "Settings",
        itemURL: "/settings",
        itemIcon: <SettingsIcon/>,
        itemHidden: false 
    },
    {
        itemName: "Logout",
        itemURL: "/logout",
        itemIcon: <ExitToAppIcon/>,
        itemHidden: true
    },
]