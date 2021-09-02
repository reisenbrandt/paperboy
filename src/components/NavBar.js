import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginRight: '32px'
  },
  button: {
    color: "white",
    border: "solid 1px white",
    marginLeft: "8px",
    "&:hover": {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }

}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            PAPERBOY
          </Typography>
          <Button href="/topHeadlines" className={classes.button}>
            Top Headlines
          </Button>
          <Button href="/" className={classes.button}>
            Search
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
