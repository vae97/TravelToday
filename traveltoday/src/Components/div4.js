import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography,Paper,Button} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../Styles/div4.css'

const useStyles = makeStyles((theme) => ({

    root:{
        backgroundColor:'pink'
    },
    text:{
        height:'350px',
        backgroundColor:'white',
        textAlign:'center'
    },
    image:{
        height:'350px',
        backgroundColor:'white'
    },
    info:{
        typography: {
            "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
            "fontSize": 14,
            "fontWeightLight": 300,
            "fontWeightRegular": 400,
            "fontWeightMedium": 500
           },
        margin:'auto',
        fontSize:'35px',
        paddingTop:'60px',
        paddingBottom:'20px',
        marginLeft:'5px',
        marginRight:'5px',
    },
    button:{
        backgroundColor:'rgba(128,0,0)',
        color:'white',
        '&:hover':{
            backgroundColor:'green'
        }
    }
    
}));

export default function Div4 (){
    const classes =useStyles();

    return(
        <Grid container className={classes.root}>
            <Grid item xs={12} md={4} className={classes.image}>
                <Paper elevation={0} square={true} className="background"></Paper>
            </Grid>
            <Grid item xs={12} md={8} className={classes.text}>
                <Typography className={classes.info}> " Sign In for more informations "</Typography>
                <Button variant="contained" color="default" className={classes.button} startIcon={<AccountCircleIcon />}>Sign in</Button>
            </Grid>
        </Grid>
    )
}