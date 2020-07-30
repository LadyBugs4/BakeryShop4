// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Container from "@material-ui/core/Container";
// import Box from '@material-ui/core/Box';
// import { borders } from '@material-ui/system';
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from '@material-ui/core/Typography';




// const styles = (theme) =>  ({
 
//     about: {
//         marginTop: theme.spacing(10),
//         paddingTop: '37%', // 16:9,
//         width:"490px",
//         height:"200px",
//         marginLeft: theme.spacing(108),
//       },
    


//   image: {
//     height:'25%',
//     width:"100%",
//     marginTop: theme.spacing(40),
//     marginBottom: theme.spacing(2),
//     border: 1,
//     borderRadius:"borderRadius",
//     style: { width: '5rem', height: '5rem' },
//     borderColor: 'text.primary',

//   },
//   bak:{
//     marginRight: theme.spacing(86),
//   }
// //   bord: {
// //       borderColor:'secondary'
// //   }


// });

  



// function AboutOur(props) {
//     const { classes } = props;


//   return (
//     <section className={classes.root}>
      
//       <CardMedia
//       className={classes.about}
//       image={"https://i.pinimg.com/564x/07/00/9f/07009fc3a2e0b6259acab3a3dc234589.jpg"}
//       title="Contemplative Reptile"
      
//     />
//        <Typography classes={{
//         root: classes.root, // class name, e.g. `root-x`
//         // class name, e.g. `disabled-x`
//       }} >
//        <Box fontWeight="fontWeightBold" fontSize="72px"  m={1}>
//     GoodDay Bakery  

//       </Box>
//   </Typography>
        
//     </section>
//   );
// };


  
//   export default withStyles(styles)(AboutOur);



import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import HomeLayout from "./homePageLayout";
import Box from '@material-ui/core/Box';


const backgroundImage =
  "https://i.pinimg.com/564x/07/00/9f/07009fc3a2e0b6259acab3a3dc234589.jpg";

const styles = (theme) => ({
  root:{
    color:"rgba(0, 0, 0, 0.95)",
      // fontFamily: 'bold',
  
     
      // fontSize: "60px",
      // fontWight:"100px"
      
    
  
  },
  // mg:{
  //  width:"20%"
  // },

  background: {
    backgroundImage: `url(${backgroundImage})`,
     backgroundColor: "#fafafa", // Average color of the background image.
    backgroundPosition: "center",
    width:"30%",
    marginLeft: theme.spacing(132),
    

   
  },
  button: {
    minWidth: 100,
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

function AboutOur(props) {
  const { classes } = props;

  return (
    <HomeLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img  classes={{
        mg: classes.mg, // class name, e.g. `root-x`
        // class name, e.g. `disabled-x`
      }}
        style={{ display: "none" }}
        src={backgroundImage}
        // alt="increase priority"
        width="10px"
      />
      <Typography classes={{
        root: classes.root, // class name, e.g. `root-x`
        // class name, e.g. `disabled-x`
      }} >
       <Box fontWeight="fontWeightBold" fontSize="50px"  m={1}>
About Our Bakery
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
       <Box fontWeight="fontWeightBold" fontSize="26px"  m={1}>
       Our bakery is the foundation of our food culture.  
       Starting with all natural ingredients, every morning our bakers begin production at 6 AM to mix, 
       knead, proof and bake our Signature Bread products.  By 10 AM our store is filled with aromatic breezes of 
       freshly baked breads and our products are ready for our customers to pick up for their daily grocery needs.


All baked goods are Preservative Free and Made with 100% LOVE
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

AboutOur.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutOur);


  