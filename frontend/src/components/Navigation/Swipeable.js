import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton, Typography } from '@material-ui/core';
import ProfileMenu from './ProfileMenu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link } from "react-router-dom"
import { AnonItmes, UserItems } from './MenuItems';

const useStyles = makeStyles({
  appBar:{
    display: "flex",
    justifyContent: "space-between"
  },
  appBarContent:{
    flexGrow: 1
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
    display: "flex",
  },
  drawerContent: {
    flexGrow: 1,
  },
});

export default function SwipeabeDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  return (
    <React.Fragment>
        <CssBaseline/>
        <AppBar
            position="fixed"
            className={classes.appBar}
        >
            <Toolbar>
                <div className={classes.appBarContent}>
                <IconButton
                    color="inherit"
                    onClick={toggleDrawer(true)} 
                >
                    <MenuIcon/>
                </IconButton>
                </div>
                <Typography variant="h3" className={classes.appBarContent}>
                    Kamino
                </Typography>
                {props.auth ?
                    <ProfileMenu className={classes.appBarContent}/>
                    : <Link to="/login" style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button color="inherit">Login</Button>
                    </Link>}
            </Toolbar>

        </AppBar>
          <SwipeableDrawer
            anchor="left"
            open={state}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            className={classes.drawer}
          >
          <div>
          <IconButton 
            onClick={toggleDrawer(false)} 
            className={classes.drawerContent}
            >
            <ChevronLeftIcon/>
          </IconButton> 
            </div>
            <Divider />
        <div className={classes.list}>
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
        {props.auth && <React.Fragment>
        <Divider />
        {UserItems.map((item, index) => (
            <Link to={item.itemURL} key={index}style={{textDecoration: 'none', color: 'inherit'}}>
              <ListItem button>
                <ListItemIcon>{item.itemIcon}</ListItemIcon>
                <ListItemText primary={item.itemName} />
              </ListItem>
            </Link>
        ))}
        </React.Fragment>}
        </div>
          </SwipeableDrawer>
    </React.Fragment>
  );
}