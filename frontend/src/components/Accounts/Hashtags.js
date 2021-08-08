import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import IconButton from "@material-ui/core/IconButton"
import InputAdornment from "@material-ui/core/InputAdornment"
import DeleteIcon from "@material-ui/icons/Delete"
import Link from '@material-ui/core/Link';
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"

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

function Hashtags(props) {
    const classes = useStyles()
  
    const rmHashtag = () => {
        console.log("RM")
    }
      
    const addHashtag = () => {
          console.log("ADD")
    }

    return (
        <React.Fragment>
            <Grid item xs={12}> 
                <TextField
                    label="Hahshtag"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={rmHashtag}>
                                    <DeleteIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <Link className={classes.add} onClick={addHashtag}>
                    <Typography>
                        + Add Hashtag
                    </Typography>
                </Link>
            </Grid>
        </React.Fragment>
    )
}

export default Hashtags