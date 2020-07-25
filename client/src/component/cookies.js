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
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import MailIcon from '@material-ui/icons/Mail';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';


// import MoreVertIcon from "@material-ui/icons/MoreVert";
import Data from "../data.json";


var likeCounts =0;

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,

    spacing:"500px"
  },
  media: {
    height: 0,
    paddingTop: "70%", // 16:9
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
  // const [expanded, setExpanded] = React.useState(false);
  const [count, setCount] = React.useState(1);


  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

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
      if(val[j]===" cookies"){
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

//addtoCart
const addToCart=() =>{
  console.log("clicked ...")
}

function like (){
likeCounts=likeCounts+1
}
  return (
     <div>
       {arr.map((ele,idx) => (
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
               <IconButton aria-label="add to favorites"  onClick={like}>
            
         
               <FavoriteBorder 
                      
               />
               {likeCounts =likeCounts+1}
                 </IconButton>
                <IconButton 
              
          >
            <div>
             
        <IconButton aria-label="cart">
        <StyledBadge badgeContent={count} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
     </div>
            </IconButton>
          
          </CardActions>
               {/* <Button onClick={addToCart}>Add to card</Button> */}
{/* 
             <Collapse in={expanded} timeout="auto" unmountOnExit>
               <CardContent></CardContent>
             </Collapse> */}
           </Card>
         ))}
       </div>

);
}
    












