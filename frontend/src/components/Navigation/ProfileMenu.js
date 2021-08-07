import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    accountcircle: {
        color: '#FFFFFF'
    }
}));

function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseRedirect = (e) => {
      handleClose()
      history.push(e.target.id)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles()

  return (
    <div>
      <IconButton onClick={handleClick}>
            <AccountCircleIcon aria-controls="simple-menu" aria-haspopup="true" className={classes.accountcircle}/>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem id="/accounts" onClick={handleCloseRedirect}>Accounts</MenuItem>
        <MenuItem id="/settings" onClick={handleCloseRedirect}>Settings</MenuItem>
        <MenuItem id="/logout" onClick={handleCloseRedirect}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileMenu