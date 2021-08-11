import React, { useEffect, useState } from "react";
import axiosInstance from "../axios";
import { useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from "@material-ui/core";
import Hashtags from "./Hashtags";

Object.size = function(obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  add: {
    cursor: 'pointer',
  },
}));

function AddAccount() {
  const history = useHistory();
  const classes = useStyles();

  const [formData, updateFormData] = useState({username: '',})

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  const checkSubmitable = () => {
      updateisSubmitable(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    
    var subForm={...formData}
    var keys = Object.keys(subForm)
    keys.splice('username', 1)
    
    var hashtags = []
    for (let i=0; i<keys.length; i++){    
      hashtags.push(subForm[keys[i]])
      delete subForm[keys[i]]
      
    }

    subForm['hashtags'] = [... new Set(hashtags.filter(function(value, index, arr){
      return value !== ''
    }))]
    console.log('after', subForm['hashtags'])

    axiosInstance
      .post('accounts/', {
        username: subForm['username'],
        hashtags: subForm['hashtags']
      })
      .then((res) => {
        history.push('/accounts')
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Account
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={handleChange}
              />
            </Grid>
            <Hashtags formData={formData} updateFormData={updateFormData} handleChange={handleChange}/>
          </Grid>
          <Button
            disabled={Object.size(formData) < 2}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Add Account
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default AddAccount