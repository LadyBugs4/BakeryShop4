import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import HomePageHeader from './homePageheader';
import product from "./product";
import ProductHowItWorks from "./product";
// import GitHubIcon from '@material-ui/icons/GitHub';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import Sidebar from './Sidebar';





const styles = makeStyles((theme) => ({
  oven:{
    fontWeight:"fontWeightBold",
     fontSize:"48px",
     color:"rgba(0, 0, 0, 0.95)"

  },
  root: {//root
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(4),
  },
  images: {//categories
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  imageWrapper: {//
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {//
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {//images hover
      opacity: 0.12,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': { //Buttun border
      border: '4px solid currentColor',
    },
  },

  media:{
    width:"100px"
  },

  imageButton: {//buttons 

    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 40,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
   
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  water:{
  position:'absolute',
    left: 40,
    right: 0,
    top: 600,
    bottom: 0,
    backgroundSize: 'cover',
  
  },
}));

// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'Twitter', icon: TwitterIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

function ProductCategories(props) {
 const classes = styles();;
 

 const waterss =[{
  
 
  url:"https://static.wixstatic.com/media/bb1bd6_a5d63398c13c415c84741e752e8fd02f~mv2.gif",
  title:"water",
  width:"200%"

 }];

  const images = [
  {
      url:
        'https://static.wixstatic.com/media/9c608a_69c3c69bd662433d9a47b602d53daaa2.jpg/v1/fill/w_396,h_400,al_c,q_80,usm_0.66_1.00_0.01/9c608a_69c3c69bd662433d9a47b602d53daaa2.webp',
      title: 'cookies',
      width: '32%',
   
    },
    {
      url:
        'https://i.pinimg.com/564x/96/f9/93/96f9931366aad25abfe37bcadc3120c6.jpg',
      title: 'dessert',
      width: '36%',
  
    },
    {
      url:
        'https://www.kingarthurflour.com/sites/default/files/styles/featured_image/public/2020-05/european-style-hearth-bread.jpg?itok=-8aOTGBk',
      title: 'Bread',
      width: '32%',
    
    },
   
    //{
    //   url:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9hjogjbiJI020wZbnYABhPk-jk4wsEv-sRQ&usqp=CAU',
    //   title: 'Pop',
    //   width: '20%',
    //   purl :'/pop'
    // },
    // {
    //   url:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm9H3NMwnb5DDyEZTzzBcTUfB6qUNXI75B1g&usqp=CAU',
    //   title: 'Jazz',
    //   width: '40%',
    //   purl :'/jazz'
    // },
  ];


  return (
    <div>
    <HomePageHeader/>

    <Container className={classes.root} component="section">
      
      <Typography   className={classes.oven}  variant="h3" marked="center" align="center" component="h2">
      Fresh From the Oven to Your Doorstep     
       </Typography>
      <br/>
      <br/>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            href={image.purl}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
         
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
              {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
            </div>
           
          
          </ButtonBase>
        ))}
       
     
      
 
       
      </div>

      {/* <div
        className={classes.water}
        style={{
          backgroundImage: `url(${waterss[0].url})`,
        }}
        /> */}
     
    </Container>
    <ProductHowItWorks />

    </div>
     
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);