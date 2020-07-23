// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import clsx from "clsx";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Data from "../data.json";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: "rotate(180deg)",
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
//   price: {
//     fontWeight: "fontWeightBold",
//     fontSize: "72px",
//   },
// }));

// export default function Recipe() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div>
//       {Data[1].map((ele) => (
//         <Card className={classes.root} key={ele._number}>
//           <CardHeader
//             avatar={
//               <Avatar
//                 aria-label="recipe"
//                 src="https://dynamic.brandcrowd.com/preview/logodraft/1ed57d70-5be9-4d98-9c5d-df3d94923cd3/image/large.png"
//                 className={classes.avatar}
//               ></Avatar>
//             }
//             action={
//               <IconButton aria-label="settings">
//                 <MoreVertIcon />
//               </IconButton>
//             }
//             title={ele.name}
//           />
//           <CardMedia className={classes.media} image={ele.imageUrl} />
//           <CardContent>
//             <Typography
//               // variant="body2"
//               color="rgba(0, 0, 0, 0.95)"
//               component="p"
//               fontWeight="fontWeightBold"
//               fontSize="50px"
//             >
//               {ele.description}
//               <Typography color="rgba(0, 0, 0, 0.95)" fontSize="50%">
//                 {ele.price}
//               </Typography>
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//             <IconButton aria-label="add to favorites">
//               <FavoriteIcon />
//             </IconButton>
//             <IconButton aria-label="share">
//               <ShareIcon />
//             </IconButton>
//             <IconButton
//               className={clsx(classes.expand, {
//                 [classes.expandOpen]: expanded,
//               })}
//               onClick={handleExpandClick}
//               aria-expanded={expanded}
//               aria-label="show more"
//             >
//               <ExpandMoreIcon />
//             </IconButton>
//           </CardActions>
//           <Collapse in={expanded} timeout="auto" unmountOnExit>
//             <CardContent></CardContent>
//           </Collapse>
//         </Card>
//       ))}
//     </div>
//   );
// }
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import { useState, useEffect } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";


// import MoreVertIcon from "@material-ui/icons/MoreVert";
import Data from "../data.json";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  price: {
    fontWeight: "fontWeightBold",
    fontSize: "72px",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // export default function RecipeReviewCard() {
  //   const classes = useStyles();
  //   const [expanded, setExpanded] = React.useState({
  //     data:[]
  //   });

  //   const handleExpandClick = () => {
  //     setExpanded(!expanded);
  //   };

  //
  //   const handleChange = (event) => {
  //     const name = event.target.name;
  //     setState({
  //       ...state,
  //       [name]: event.target.value,
  //     });
  //   };
  const [data, setData] = useState([]);



  useEffect(() => {
    //axios.get("http://localhost:7000/getItem")
    fetch("http://localhost:7000/getItem")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);


  console.log(data)
   // axios.get("http://localhost:7000/getItem")
    // fetch("http://localhost:7000/getItem")
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
  


  
  //  console.log(x())
  const x=function(){
//var key=[]
var result=[]
  for(var i in data){
    var key = i;
    
    var val = data[i];
    for(var j in val){
      if(val[j]===" dessert"){
      // console.log(val[j])
      // console.log(data[i])
      result.push(data[i])
      }
        var sub_key = j;
        var sub_val = val[j];
       // key.push(val[j])
    //     console.log(sub_key);
    //  console.log(sub_val)
     
       
    }
}
return result
  }

//console.log(x(+"done"))

var arr=x()
console.log(arr)


  return (
     <div>
       {arr.map((ele) => (
             <Card className={classes.root} key={ele._number}>
             <CardHeader
               avatar={
                 <Avatar
                   aria-label="recipe"
                   src="https://dynamic.brandcrowd.com/preview/logodraft/1ed57d70-5be9-4d98-9c5d-df3d94923cd3/image/large.png"
                   className={classes.avatar}
                 ></Avatar>
               }
               action={
                 <IconButton aria-label="settings">
                   <MoreVertIcon />
                 </IconButton>
               }
               title={ele.NameOfItems}
             />
             <CardMedia className={classes.media} image={ele.image} />
             <CardContent>
               <Typography
                 // variant="body2"
                 color="rgba(0, 0, 0, 0.95)"
                 component="p"
                 fontWeight="fontWeightBold"
                 fontSize="50px"
               >
                 {ele.description}
                 <Typography color="rgba(0, 0, 0, 0.95)" fontSize="50%">
                   {ele.Price+"jd"}
                 </Typography>
               </Typography>
             </CardContent>
             <CardActions disableSpacing>
               <IconButton aria-label="add to favorites">
                 <FavoriteIcon />
               </IconButton>
               <IconButton aria-label="share">
                 <ShareIcon />
               </IconButton>
               <IconButton
                 className={clsx(classes.expand, {
                   [classes.expandOpen]: expanded,
                 })}
                 onClick={handleExpandClick}
                 aria-expanded={expanded}
                 aria-label="show more"
               >
                 <ExpandMoreIcon />
               </IconButton>
             </CardActions>
             <Collapse in={expanded} timeout="auto" unmountOnExit>
               <CardContent></CardContent>
             </Collapse>
           </Card>
         ))}
       </div>

);
}
    //     <Typography component="h5" variant="h5">
    //       {ele.price}
    //     </Typography>
    //     // <Card className={classes.root} key={ele.price}>
    //     //   <CardHeader
    //     //     avatar={
    //     //       <Avatar
    //     //         aria-label="recipe"
    //     //         src="https://dynamic.brandcrowd.com/preview/logodraft/1ed57d70-5be9-4d98-9c5d-df3d94923cd3/image/large.png"
    //     //         className={classes.avatar}
    //     //       ></Avatar>
    //     //     }
    //     //     // action={
    //     //     //   <IconButton aria-label="settings">
    //     //     //     <MoreVertIcon />
    //     //     //   </IconButton>
    //     //     // }
    //     //     title={ele.name}
    //     //   />
    //     //   <CardMedia className={classes.media} image={ele.imageUrl} />
    //     //   <CardContent>
    //     //     <Typography
    //     //       // variant="body2"
    //     //       color="rgba(0, 0, 0, 0.95)"
    //     //       component="p"
    //     //       fontWeight="fontWeightBold"
    //     //       fontSize="50px"
    //     //     >
    //     //       {ele.description}
    //     //      <Typography color="rgba(0, 0, 0, 0.95)"
    //     //      fontSize="50%"
    //     //       >
    //     //       {ele.price}
    //     //       </Typography>
    //     //     </Typography>
    //     //   </CardContent>
    //     //   <CardActions disableSpacing>
    //     //     <IconButton aria-label="add to favorites">
    //     //       <FavoriteIcon />
    //     //     </IconButton>
    //     //     <IconButton aria-label="share">
    //     //       <ShareIcon />
    //     //     </IconButton>
    //     //     <IconButton
    //     //       className={clsx(classes.expand, {
    //     //         [classes.expandOpen]: expanded,
    //     //       })}
    //     //       onClick={handleExpandClick}
    //     //       aria-expanded={expanded}
    //     //       aria-label="show more"
    //     //     >
    //     //       <ExpandMoreIcon />
    //     //     </IconButton>
    //     //   </CardActions>
    //     //   <Collapse in={expanded} timeout="auto" unmountOnExit>
    //     //     <CardContent></CardContent>
    //     //   </Collapse>
    //     // </Card>
    //   ))}
    // </div>

// <div >
//       {arr.map((ele) => (
    //     <Card className={classes.root} key={ele._id}>
    //       <div className={classes.details}>
    //         <CardContent className={classes.content}>
    //         <CardMedia className={classes.media} image={ele.image} />

    //           <Typography component="h5" variant="h5">
    //           {ele.NameOfItems}
    //           </Typography>
    //           <Typography component="h5" variant="h5">
    //             {ele.price}
    //           </Typography>
    //           <Typography variant="subtitle1" color="textSecondary">
    //             {ele.NameOfCategory}
    //           </Typography>
    //           <Typography variant="subtitle1" color="textSecondary">
    //             {ele.description}
    //           </Typography>
    //           <Typography variant="subtitle1" color="textSecondary">
    //             {ele.NameOfCategory}
    //           </Typography>
    //           {/* <Typography variant="subtitle1" color="textSecondary">
    //             {ele.image}
    //           </Typography> */}
    //         </CardContent>
            
    //       </div>
    //       <CardMedia
    //         className={classes.cover}
    //         image="https://music-and-marketing.com/wp-content/uploads/2020/02/itunes-music-marketing.jpg"
    //         title="Live from space album cover"
    //       />
          
    //     </Card>
    //   ))}
    // </div>












