import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Paper, Typography} from '@material-ui/core';
import '../Styles/Div1.css';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles((theme) => ({
    container:{
        height:'500px',
        backgroundColor:'rgb(0,128,128)'
    },
    text:{
        backgroundColor:'rgb(0,128,128)',
        height:'250px',
        textAlign:'center',
        paddingTop:'100px',
        padding:'3px'
    },
    svg:{
        backgroundColor:'rgb(0,128,128)',
        height:'250px',
        textAlign:'center'
    
    },
    button:{
        backgroundColor:'rgb(0,128,128)',
        height:'250px',
        textAlign:'center',
        paddingTop:'100px',

    },
    font:{
        color:'white',
        fontSize:'30px',
        
    }
}));

export default function Div1() {
  const classes = useStyles();

  return (
      <Grid container className={classes.container} xs={12}>
          <Grid item className={classes.text} xs={12} >
              <Typography className={classes.font}>"Find your next Destination in Sri Lanka"</Typography>
          </Grid>

          <Grid item className={classes.svg} xs={7} md={3}>
              <Paper className={'image'}></Paper>
          </Grid>
          <Grid item className={classes.button} xs={5} md={9}>
              <Button variant="contained" startIcon={<ExploreIcon/>}>Explore</Button>
          </Grid>
      </Grid>
  );
}