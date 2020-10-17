import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid, Paper, Typography} from '@material-ui/core';
import '../Styles/Div1.css';
import ExploreIcon from '@material-ui/icons/Explore';

const useStyles = makeStyles((theme) => ({
    container:{
        height:'700px',
        backgroundColor:'white'
    },
    text:{
        backgroundColor:'rgb(0,128,128)',
        height:'400px',
        textAlign:'center',

    },
    svg:{
        backgroundColor:'white',
        height:'300px',
        textAlign:'center'
    
    },
    button:{
        backgroundColor:'white',
        height:'300px',
        textAlign:'center',

    },
    font1:{
        color:'white',
        fontSize:'24px',
        fontWeight:'bold',
        backgroundColor:'rgba(81, 90, 90 ,5%)',
        width:'90%',
        margin:'auto',
        marginTop:'150px',
        borderRadius:'10px',
        padding:'2px'
    },
    font2:{
        color:'rgb(246, 248, 248)',
        fontSize:'14px',
        fontStyle:'italic',
        backgroundColor:'rgba(81, 90, 90 ,5%)',
        width:'90%',
        margin:'auto',
        borderRadius:'10px',
        padding:'2px'
    },
    realbutton:{
        color:'white',
        backgroundColor:'green',
        '&:hover': {
            background: "#f00",
         },
    }
}));

export default function Div1() {
  const classes = useStyles();

  return (
      <Grid container className={classes.container} xs={12}>
          <Grid item className={classes.text} xs={12} >
              <Paper className="backgroundimage" >
                <Typography className={classes.font1}>" Find your next Destination in Sri Lanka "</Typography>
                <Typography className={classes.font2}>Settle in somewhere new. Discover stays to live, work, or just relax.</Typography>
              </Paper>
          </Grid>

          <Grid item className={classes.svg} xs={6} md={4}>
              <Paper className="image" elevation={0} square={true}></Paper>
          </Grid>
          <Grid item className={classes.button} xs={6} md={8}>
              <Paper elevation={0} square={true} className="explore">
                <div className='div'>
                    <Button variant="contained" className={classes.realbutton} startIcon={<ExploreIcon/>}>Explore</Button>
                </div>
              </Paper>
          </Grid>
      </Grid>
  );
}