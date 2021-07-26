import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Cards from './Cards';

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

  return (
    <div className={classes.root}>
      <Grid 
        container 
        spacing={5}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        >
      <Grid item xs={3} className={classes.items}>
        <Cards/>
      </Grid>
      <Grid item xs={3} className={classes.items}>
        <Cards/>
      </Grid>
      <Grid item xs={3} className={classes.items}>
        <Cards/>
      </Grid>
      <Grid item xs={3} className={classes.items}>
        <Cards/>
      </Grid>
      <Grid item xs={3} className={classes.items}>
        <Cards/>
      </Grid>
      <Grid item xs={3} className={classes.items}>
        <Cards/>
      </Grid>
      <Grid item xs={3} className={classes.items}>
        <Cards/>
      </Grid>
    </Grid>
  </div>
  );
}

export default MediaCard