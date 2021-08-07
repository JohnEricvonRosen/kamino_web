import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import { AnonItmes, UserItems } from './MenuItems';

const drawerWidth = 240;

const useStyles = makeStyles(() => ({
    root: {
        display: "flex"
    },
    container: {
        justifyContent: "center"
    },
}))

function NavSwipeableDrawer (){
    const [isOpen, setOpen] = useState(false)
    const classes= useStyles()

    

    return(
        <div className={classes.root}>
            <SwipeableDrawer
                anchor="left"
                onOpen={()=> {}}
                open={isOpen}
                onClose={()=>{}}
            >
            <List>
                {AnonItmes.map((item, index) => (
                    <Link to={item.itemURL} key={index} style={{textDecoration: 'none', color: 'inherit'}}>
                    <ListItem button>
                        <ListItemIcon>{item.itemIcon}</ListItemIcon>
                        <ListItemText primary={item.itemName} />
                    </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            {UserItems.map((item, index) => (
                <Link to={item.itemURL} key={index}style={{textDecoration: 'none', color: 'inherit'}}>
                    <ListItem button>
                        <ListItemIcon>{item.itemIcon}</ListItemIcon>
                        <ListItemText primary={item.itemName} />
                    </ListItem>
                </Link>
          ))}
          <Divider/>
                <ListItem button onClick={()=>{setOpen(false)}}>
                    <ListItemIcon><MenuIcon/></ListItemIcon>
                    <ListItemText>Close</ListItemText>
                </ListItem>
            </SwipeableDrawer>
            <div className={classes.container}>
                <Typography onClick={()=>{setOpen(true)}}>Open</Typography>
            </div>
        </div>
    )
}

export default NavSwipeableDrawer