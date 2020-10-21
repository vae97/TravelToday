import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root:{
        height:'200px',
        textAlign:'center'
    },
    text:{
        typography: {
            "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
            "fontSize": 14,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500
           },
        margin:'auto',
        fontSize:'35px',
        paddingTop:'50px'
    }

    
}));

export default function Div2() {
  const classes = useStyles();

  return (
      <Grid container className={classes.root} xs={12}>
          <Grid item xs={12} md={12}>
              <Typography className={classes.text}>" Top destinations for Sri Lanka city trips "</Typography>
          </Grid>
      </Grid>
  );
}