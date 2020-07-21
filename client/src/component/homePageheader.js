import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeLayout from "./homePageLayout";
import Box from '@material-ui/core/Box';


const backgroundImage =
  "https://static.wixstatic.com/media/898e2587ee2a4e5d86616c3d78c5ccac.jpg";

const styles = (theme) => ({
  root:{
    color:"rgba(0, 0, 0, 0.95)",
      // fontFamily: 'bold',
  
     
      // fontSize: "60px",
      // fontWight:"100px"
      
    
  
  },

  background: {
    backgroundImage: `url(${backgroundImage})`,
     backgroundColor: "#fafafa", // Average color of the background image.
    backgroundPosition: "center",
   
  },
  button: {
    minWidth: 200,
    boxShadow: '0 3px 5px 3px rgba(0, 0, 0, 0.95)',
    background: 'linear-gradient(45deg, #eceff1 30%, #eceff1 90%)',
color:"black",
fontSize:"15px",
fontWeight:"fontWeightBold",

   

  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    color:"rgba(0, 0, 0, 0.95)",
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function HomePageHeader(props) {
  const { classes } = props;

  return (
    <HomeLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
        width="50px"
      />
      <Typography classes={{
        root: classes.root, // class name, e.g. `root-x`
        // class name, e.g. `disabled-x`
      }} >
       <Box fontWeight="fontWeightBold" fontSize="72px"  m={1}>
    GoodDay Bakery  

      </Box>
  </Typography>
      {/* <Typography fontWeight="fontWeightBold"
        color="inherit"
        align="center"
        variant="h4"
        className={classes.h5}
      > */}
      <Typography classes={{
        root: classes.root, // class name, e.g. `root-x`
        // class name, e.g. `disabled-x`
      }} >
       <Box fontWeight="fontWeightBold" fontSize="27px"  m={1}>
       It's the Simple Pleasures in Life    

      </Box>
  </Typography>
      {/* <Button   classes={{
        root: classes.root, // class name, e.g. `root-x`
        // class name, e.g. `disabled-x`
      }} 
        // color="primary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/signup"
        
      >
        Register
      </Button> */}
    </HomeLayout>
  );
}

HomePageHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePageHeader);
