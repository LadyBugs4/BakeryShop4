import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import HomePageHeader from './homePageheader';


const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
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
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
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
}));

function ProductCategories(props) {
 const classes = styles();;

  const images = [
    {
      url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTLo8uHO7HuxF-hi299pATcjnAhMHM_bboLQ&usqp=CAU',
      title: 'Sad',
      width: '40%',
      purl:'./sad'
    },
    {
      url:
        'https://happinesson.com/wp-content/uploads/2019/08/how-to-be-happy-by-listening-to-music-blog-1080x608.jpg',
      title: 'Happy',
      width: '20%',
      purl:'happy'
    },
    {
      url:
        'https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x400_80//fetchdata15/images/f2/14/b6/f214b6b04e913795a6d85139b6c9b619.jpg',
      title: 'Romatic',
      width: '40%',
      purl: './romantic'
    },
    {
      url:
        'data:image/jpeg;base64,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',
      title: 'Tarab',
      width: '38%',
      purl:'./tarab'
    },
    {
      url:
        'https://cdn3.vectorstock.com/i/1000x1000/78/47/music-party-vector-267847.jpg',
      title: 'Sarcastic',
      width: '38%',
      purl:'./sarcastic'
    },
    {
      url:
        'https://image.shutterstock.com/image-photo/young-adult-girlfriends-having-fun-260nw-1057228151.jpg',
      title: 'Friends Drive',
      width: '24%',
      purl:'./workout'
    },
    {
      url:
        'data:image/jpeg;base64,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',
      title: 'Calm',
      width: '40%',
      purl :'/calm'
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9hjogjbiJI020wZbnYABhPk-jk4wsEv-sRQ&usqp=CAU',
      title: 'Pop',
      width: '20%',
      purl :'/pop'
    },
    {
      url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm9H3NMwnb5DDyEZTzzBcTUfB6qUNXI75B1g&usqp=CAU',
      title: 'Jazz',
      width: '40%',
      purl :'/jazz'
    },
  ];

  return (
    <div>
    <HomePageHeader/>
    <Container className={classes.root} component="section">
      
      <Typography variant="h4" marked="center" align="center" component="h2">
        FOR ALL MOOD
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
            </div>
          </ButtonBase>
        ))}
       
     

       
      </div>
    </Container>
  
    </div>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);