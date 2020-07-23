import React from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    background:"rgba(0, 0, 0, 0.94)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background:"rgba(0, 0, 0, 0.79)",
    color:"white"
  },
}));
export default function Item() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
   NameOfCategory: " ",
      NameOfItems:" " ,
      Price: " ",
      description:" ",
      image:" ",
      NumberOfItems:" ",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    var NameOfCategory = document.getElementById("NameOfCategory").value;
    var NameOfItems=document.getElementById("NameOfItems").value
    var Price = document.getElementById("Price").value;
    var description = document.getElementById("description").value;
     var image = document.getElementById("image").value;
     var NumberOfItems=document.getElementById("NumberOfItems").value;
    //var password = document.getElementById("password").value;
    //console.log(password)
     console.log(NameOfCategory)
      console.log(Price)
      console.log(image)
    const items = {
      NameOfCategory: NameOfCategory,
      NameOfItems:NameOfItems,
      Price: Price,
      description:description,
      image:image,
      NumberOfItems:NumberOfItems
      // email: email,
      // password: password,
    };
    //console.log(user)
    axios
       .post("http://localhost:7000/items", items)
 .then((res) => {
    console.log(res.data);
    if(res.data === "item added"){
        alert('item added')
      }
  }).catch((error) => {
       alert("try again ")
      console.log(error)
  });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
         Add Item
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                value={values.NameOfCategory}
                onChange={handleChange("NameOfCategory")}
                autoComplete="fname"
                name="NameOfCategory"
                variant="outlined"
                required
                fullWidth
                id="NameOfCategory"
                label="NameOfCategory"
                autoFocus
              />
            </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                value={values.NameOfItems}
                onChange={handleChange("NameOfItems")}
                autoComplete="fname"
                name="NameOfItems"
                variant="outlined"
                required
                fullWidth
                id="NameOfItems"
                label="NameOfItems"
                autoFocus
              />
            </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                value={values.Price}
                onChange={handleChange("Price")}
                autoComplete="fname"
                name="Price"
                variant="outlined"
                required
                fullWidth
                id="Price"
                label="Price"
                autoFocus
              />
            </Grid>
            </Grid>
            <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                value={values.description}
                onChange={handleChange("description")}
                autoComplete="fname"
                name="description"
                variant="outlined"
                required
                fullWidth
                id="description"
                label="description"
                autoFocus
              />
            </Grid>
            </Grid>
             <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                value={values.image}
                onChange={handleChange("image")}
                autoComplete="fname"
                name="image"
                variant="outlined"
                required
                fullWidth
                id="image"
                label="image"
                autoFocus
              />
            </Grid>
            </Grid>



            <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                value={values.NumberOfItems}
                onChange={handleChange("NumberOfItems")}
                autoComplete="fname"
                name="NumberOfItems"
                variant="outlined"
                required
                fullWidth
                id="NumberOfItems"
                label="NumberOfItems"
                autoFocus
              />
            </Grid>
            </Grid>


            
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary" 
            className={classes.submit}
          >
          Add Item
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="delet item" variant="body2">
               Did you need to delet item ?
              </Link>
            </Grid>
            <Grid item>
              <p id="accoutCreated"></p>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}