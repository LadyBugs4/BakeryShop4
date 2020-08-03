import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';



const styles = (theme) =>  ({
 



  image: {
    height:'25%',
    width:"100%",
    marginTop: theme.spacing(27),
    marginBottom: theme.spacing(2),
    border: 100,
    borderRadius:"borderRadius",
    style: { width: '50rem', height: '50rem' },
    borderColor: "rgba(0, 0, 0, 0.94)",
    

  },
//   bord: {
//       borderColor:'secondary'
//   }


});

  



function ProductHowItWorks(props) {
    const { classes } = props;


  return (
    <section className={classes.root}>
      
        <img
          src="https://static.wixstatic.com/media/bb1bd6_a5d63398c13c415c84741e752e8fd02f~mv2.gif"
          className={classes.image}
        
        />  
        
    </section>
  );
};


  
  export default withStyles(styles)(ProductHowItWorks);
  