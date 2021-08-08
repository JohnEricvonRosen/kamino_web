import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import Cards from './Cards';
import axiosInstance from '../axios';

const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow: 1,
  },
  items:{
    // maxWidth: 345,
    minWidth: 345,
  },
  add:{
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginBottom: theme.spacing(8),
  }
}));

function Accounts() {
  const classes = useStyles();
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    setLoading(true)
    axiosInstance.get('/accounts/')
      // .then((r) => r.json())
      .then((response) => {
        setData(response['data'])
        setLoading(false)
      })
  }, [])
  return (
    <div className={classes.root}>
        <Grid 
          container 
          spacing={5}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          >
          {loading ? <Grid item><CircularProgress/></Grid>:
          <React.Fragment>
          {data.map((account, index) => {
            return (<Grid item key={index} xs={2} className={classes.items}>
              <Cards account={account}/>
            </Grid>
            )})

          }
          </React.Fragment>
    }
      </Grid>
  <Tooltip title="Add" aria-label="add">
  <Fab onClick={()=>history.push('/addaccount')} color="secondary" className={classes.add}>
    <AddIcon />
  </Fab>
  </Tooltip>  
  </div>

  );
}

export default Accounts