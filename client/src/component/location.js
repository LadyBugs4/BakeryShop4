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
import AddLocationIcon from "@material-ui/icons/AddLocation";

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
export default function Wtem() {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = React.useState({
    City: "",
    Area: "",
    RoadName: "",
    BuildingNumber: "",
    Floor: "",
    PhoneNumber: "",
  });
  const order = () => {
    window.location = "/checkOutForm";
    //alert(value)
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("loggedInToken");
      const {
        City,
        Area,
        RoadName,
        BuildingNumber,
        Floor,
        PhoneNumber,
      } = values;
      const locations = {
        // category,
        // name,
        // price,
        // description,
        // image,
        City,
        Area,
        RoadName,
        BuildingNumber,
        Floor,
        PhoneNumber,
      };
      console.log(locations);
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const bodyParameters = {
        City,
      };
      const result = await axios.post("http://localhost:7000/api/location", locations, config);
      if (result.status === 201) {
        setIsOpen(true);
        setValues(() => ({
          City: "",
          Area: "",
          RoadName: "",
          BuildingNumber: 0,
          Floor: "",
          PhoneNumber: 0,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const isInvalid =
    values.City === "" ||
    values.Area === "" ||
    values.RoadName === "" ||
    values.BuildingNumber === "" ||
    values.Floor === "" ||
    values.PhoneNumber === "";
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
      ></Snackbar>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AddLocationIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add your location
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={values.City}
                  onChange={handleChange("City")}
                >
                  <MenuItem value="Amman">Amman</MenuItem>
                  <MenuItem value="Zarqa">Zarqa</MenuItem>
                  <MenuItem value="Salt">Salt</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={values.Area}
                onChange={handleChange("Area")}
                autoComplete="fname"
                name="Area"
                variant="outlined"
                required
                fullWidth
                id="Area"
                label="Area"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={values.RoadName}
                onChange={handleChange("RoadName")}
                autoComplete="fname"
                name="RoadName"
                variant="outlined"
                required
                fullWidth
                id="RoadName"
                label="RoadName"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={values.BuildingNumber}
                onChange={handleChange("BuildingNumber")}
                autoComplete="fname"
                name="BuildingNumber"
                variant="outlined"
                required
                fullWidth
                id="BuildingNumber"
                label="BuildingNumber"
                autoFocus
                type="number"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={values.Floor}
                onChange={handleChange("Floor")}
                autoComplete="fname"
                name="Floor"
                variant="outlined"
                required
                fullWidth
                id="Floor"
                label="Floor"
                autoFocus
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                maxWidth="10"
                value={values.PhoneNumber}
                onChange={handleChange("PhoneNumber")}
                autoComplete="fname"
                name="PhoneNumber"
                variant="outlined"
                required
                fullWidth
                id="PhoneNumber"
                label="Phone number"
                autoComplete="tel"
                type="number"
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
            onClick={order}
          >
            Next
          </Button>
          <Grid container justify="flex-end">
            <Grid item></Grid>
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
