import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    
    
    secondary: {
      light: '#ab003c',
      main: '#ab003c',
      dark: '#ab003c',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:"rgba(0, 0, 0, 0.95)",


    // borderRadius: 3,
    border: 0,
    color: 'white',
    // height: 300,
    // padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    // $disabled is a reference to the local disabled
    // rule within the same style sheet.
    // By using &, we increase the specificity.
    
      // boxShadow: 'none',                                                                                                                                                                         
   
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(155),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  function onclick(){
   window.location="./signup"
  }

  return (
    <div className={classes.root} >
      <AppBar position="static" >
        <Toolbar       
      classes={{
        root: classes.root, // class name, e.g. `root-x`
        // class name, e.g. `disabled-x`
      }}
 >
        
          <Button color="inherit" href="/"  className={classes.title}> Bakery</Button>
          <Button color="inherit" href="login" >Login</Button>
          <Button color="inherit" href="signup">Sign Up</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}