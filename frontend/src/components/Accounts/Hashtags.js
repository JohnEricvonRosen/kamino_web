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
    const [tags, updateTags] = useState([0,])
    const [counter, updateCounter] = useState(0)
  
    const rmHashtag = (tag) => {
        const rmTag = [...tags]
        const index = rmTag.indexOf(tag)
        if (index > -1){
            rmTag.splice(index, 1)
            updateTags(rmTag)
        }
    }
    
    const addHashtag = () => {
        const addTag = [...tags]
        const incCounter = counter + 1
        addTag.push(incCounter) 
        updateTags(addTag)
        updateCounter(incCounter)
        console.log("ADD")
    }

    return (
        <React.Fragment>
            {tags.map((tag) => {
                return (
                    <Grid item xs={12} key={tag}> 
                        <TextField
                            label="Hahshtag"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => rmHashtag(tag)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                )
            })}
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