import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Cards from './Cards';
import { Typography } from '@material-ui/core';
import axiosInstance from '../axios';

const useStyles = makeStyles({
  root:{
    flexGrow: 1,
  },
  items:{
    // maxWidth: 345,
    minWidth: 345,
  },
});

function MediaCard() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    axiosInstance.get('')
      // .then((r) => r.json())
      .then((response) => {
        setData(response['data'])
        setLoading(false)
      })
  }, [])
  return (
    <div className={classes.root}>
      {loading ? <Typography variant="h1" component="h1">Loading</Typography> :
        <Grid 
          container 
          spacing={5}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          >
          {data.map((account, index) => {
            return (<Grid item key={index} xs={3} className={classes.items}>
              <Cards account={account}/>
            </Grid>
            )})
          }
      </Grid>
    }
  </div>
  );
}

export default MediaCard