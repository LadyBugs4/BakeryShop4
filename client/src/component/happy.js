/*Test Git Hub */
import React from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import AudioPlayer from "material-ui-audio-player";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 1000,
    marginBottom:40,
    margin: "auto",
    textAlign: "center"
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 300,
    position: "relative",
    marginLeft: 100,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    width: 600,
  },
  playIcon: {
    height: 38,
    width: 38,
  },

}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();
  const muiTheme = createMuiTheme({});
//   const [songs, setSongs] = useState([]);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     fetch("http://localhost:6060/happy")
//       .then((response) => response.json())
//       .then((songs) => setSongs(songs));

//       },[]);
 

  return (
    <div >
      {/* {songs.map((ele) => (
        <Card className={classes.root} key={ele._id}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {ele.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {ele.artist.name}
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <ThemeProvider theme={muiTheme}>
                <AudioPlayer src={ele.preview} download={true} loop={true} />
              </ThemeProvider>
            </div>
          </div>
          <CardMedia
            className={classes.cover}
            image="https://music-and-marketing.com/wp-content/uploads/2020/02/itunes-music-marketing.jpg"
            title="Live from space album cover"
          />
          
        </Card> */}
      ))
    </div>
