import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,Paper,Typography,TextField, Button} from '@material-ui/core';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import "../Styles/Signup.css"

const useStyles =makeStyles((themes)=>({

    root:{
        backgroundColor:'white',
        textAlign:'center'
    },
    form:{
        
        borderRadius:'15px',
        margin:'auto',
        backgroundColor:'rgba(222, 239, 228 ,80%)',
        marginTop:'125px',
        marginBottom:'100px',
        width:'80%',
        paddingTop:'10px'
    },
    signup:{
        paddingTop:'10px',
        paddingBottom:'10px',
        fontSize:'20px',
        color:'black'

    },
    inputs:{
        marginTop:'15px',
        marginBottom:'15px',
        width:'70%',
        color:'white'
    },
    icons:{
        paddingTop:'40px',
        paddingRight:'10px',
        color:'black',
        width:'10%'
    },
    button:{
        width:'85%',
        marginTop:'20px',
        marginBottom:'30px',
        backgroundColor:'green',
        color:'white',
        '&:hover':{
            backgroundColor:'white',
            color:'green'
        }
    },
    link:{
        color:'green',
        paddingBottom:'30px'
    }

}))

export default function Signup(){

    const classes =useStyles(); 
    return(
        <Grid container className="signinbackground">
            <Grid item xs={12} md={4}>

            </Grid>
            <Grid item xs={12} md={4}>
                <Paper className={classes.form} elevation={20}>
                    <Typography className={classes.signup}>Sign Up</Typography>
                    <hr></hr>
                    <form>
                        <FaceOutlinedIcon className={classes.icons}/><TextField required id="username" label="User Name" className={classes.inputs} /><br></br>
                        <EmailOutlinedIcon className={classes.icons}/><TextField required id="email" label="Email" className={classes.inputs} /><br></br>
                        <VpnKeyOutlinedIcon className={classes.icons}/><TextField type="password" required id="password" label="Password" className={classes.inputs} />
                        <Button variant="contained" className={classes.button}>Sign Up</Button>
                        <Typography className={classes.link}>Already have an account ?</Typography>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>

            </Grid>
        </Grid>
    )
}