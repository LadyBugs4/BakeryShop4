import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";

import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
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
  formControl: {
    minWidth: "100%",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    background: "rgba(0, 0, 0, 0.94)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "rgba(0, 0, 0, 0.79)",
    color: "white",
  },
}));

export default function Item() {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = React.useState({
    category: "",
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const [isOpen, setIsOpen] = React.useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("loggedInToken");
      const { category, name, price, description, image } = values;

      const items = {
        category,
        name,
        price,
        description,
        image,
      };

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const bodyParameters = {
        category,
      };

      const result = await axios.post("http://localhost:7000/api/products", items, config);

      if (result.status === 201) {
        setIsOpen(true);
        setValues(() => ({
          category: "",
          name: "",
          price: 0,
          description: "",
          image: "",
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isInvalid =
    values.name === "" ||
    values.category === "" ||
    values.price === "" ||
    values.description === "" ||
    values.image === "";

  React.useEffect(() => {
    // there is no token, redirect to login page
    if (localStorage.getItem("loggedInToken") === null) {
      history.push("/login");
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        key={"top" + "center"}
        autoHideDuration={6000}
      >
        {/* <Alert onClose={() => {
          setIsOpen(false)
        }} severity="success">
          This is a success message!
        </Alert> */}
      </Snackbar>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Add Item
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.category}
                  onChange={handleChange("category")}
                >
                  <MenuItem value="bread">Bread</MenuItem>
                  <MenuItem value="cookies">Cookies</MenuItem>
                  <MenuItem value="dessert">Deserts</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={values.name}
                onChange={handleChange("name")}
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={values.Price}
                onChange={handleChange("price")}
                autoComplete="fname"
                name="price"
                variant="outlined"
                required
                fullWidth
                id="price"
                label="Price"
                autoFocus
                type="number"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={values.description}
                onChange={handleChange("description")}
                autoComplete="fname"
                name="description"
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={values.image}
                onChange={handleChange("image")}
                autoComplete="fname"
                name="image"
                variant="outlined"
                required
                fullWidth
                id="image"
                label="Image"
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
            disabled={isInvalid}
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
