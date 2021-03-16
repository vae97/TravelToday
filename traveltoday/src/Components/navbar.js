import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,IconButton,Typography,Button,Link} from '@material-ui/core';
import FlightIcon from '@material-ui/icons/Flight';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'green'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link:{
    color:"white",
  }
}));

export default function NavigationBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <FlightIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Travel Today
        </Typography>
        <Link href={props.route} className={classes.link} underline={'none'}><Button color="inherit" >{props.name}</Button></Link>
      </Toolbar>
    </AppBar>

  );
}
