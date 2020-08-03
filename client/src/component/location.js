// import React from "react";
// import axios from "axios";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import AddLocationIcon from '@material-ui/icons/AddLocation';
// import MenuItem from '@material-ui/core/MenuItem'

// import {
//     fade,
//     ThemeProvider,
//     withStyles,
//     createMuiTheme,
//   } from '@material-ui/core/styles';
//   import InputBase from '@material-ui/core/InputBase';
//   import InputLabel from '@material-ui/core/InputLabel';
//   import FormControl from '@material-ui/core/FormControl';
//   import { green } from '@material-ui/core/colors';
//   import FormHelperText from '@material-ui/core/FormHelperText';
//   import Select from '@material-ui/core/Select';
//   import NativeSelect from '@material-ui/core/NativeSelect';
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     background:"rgba(0, 0, 0, 0.94)",
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     background:"rgba(0, 0, 0, 0.79)",
//     color:"white"
//   },
//   city:{
//       width:"395px",
    
//   }
// }));
// export default function Wtem() {
//   const classes = useStyles();
//   const [values, setValues] = React.useState({
//   City: " ",
//    Area:" " ,
//    RoadName: " ",
//    BuildingNumber:" ",
//    Floor:" ",
//    DeliveryInstructions:" ",
//   });
//   const ValidationTextField = withStyles({
//     root: {
//       '& input:valid + fieldset': {
//         borderColor: 'green',
//         borderWidth: 2,
//       },
//       '& input:invalid + fieldset': {
//         borderColor: 'red',
//         borderWidth: 2,
//       },
//       '& input:valid:focus + fieldset': {
//         borderLeftWidth: 6,
//         padding: '4px !important', // override inline-style
//       },
//     },
//   })(TextField);
//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };
  
//   const onSubmit = (e) => {
//     e.preventDefault();
//    var City = document.getElementById("City").value;
//     var Area = document.getElementById("Area").value;
//     var RoadName = document.getElementById("RoadName").value;
//     var BuildingNumber = document.getElementById("BuildingNumber").value;
//      var Floor = document.getElementById("Floor").value;
//      var DeliveryInstructions=document.getElementById("DeliveryInstructions").value;
     
  
//     const locations = {
//      City:City,
//       Area:Area,
//       RoadName:RoadName,
//       BuildingNumber:BuildingNumber,
//       Floor:Floor,
//       DeliveryInstructions:DeliveryInstructions
//       // email: email,
//       // password: password,
//     };
//     console.log(locations)
//     //console.log(user)
//     axios
//        .post("http://localhost:7000/api/location", locations)
//  .then((res) => {
//     console.log(res.data);
//     if(res.date === "done"){
//         alert('ok')
//       }
//   }).catch((error) => {
//        alert("try again ")
//       console.log(error)
//   });
//   };
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//             <AddLocationIcon/>

//         </Avatar>
//         <Typography component="h1" variant="h5">
//          Add location
//          </Typography>
//         {/* <form className={classes.form} onSubmit={onSubmit} noValidate>
//         <Grid container spacing={2}>
//             <Grid item xs={12} >
//               <TextField
//                 value={values.City}
//                 onChange={handleChange("City")}
//                 autoComplete="fname"
//                 name="City"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="City"
//                 label="City"
//                 autoFocus
//               />
//             </Grid>
//   </Grid> */ }
//               <form className={classes.form} onSubmit={onSubmit} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <FormControl variant="filled" className={classes.formControl}>
//                 <InputLabel id="demo-simple-select-label">City</InputLabel>
//                 <Select
//                   labelId="demo-simple-select-label"
//                   id="demo-simple-select"
//                   value={values.city}
//                   onChange={handleChange('city')}
//                 >
//                   <MenuItem value="Amman">Amman</MenuItem>
//                   <MenuItem value="Zarqa">Zarqa</MenuItem>
//                   <MenuItem value="Salt">Salt</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>
//           {/* <Grid container spacing={2}>
//             <Grid item xs={12} >
//             <FormControl className={classes.city}>
//          <InputLabel  value= {values.City}>City</InputLabel>
//         <NativeSelect
//         required >
//           <option aria-label="None" value="" />
//           <option value={"Amman"}>Amman</option>
//           <option value={"Zarqa"}>Zarqa</option>
//           <option value={"Salt"}>Salt</option>
//         </NativeSelect> 
//         <FormHelperText>Choose your city</FormHelperText>
//       </FormControl>
//             </Grid>
//             </Grid> */}
//             <Grid container spacing={2}>
//             <Grid item xs={12} >
//               <TextField
//                 value={values.Area}
//                 onChange={handleChange("Area")}
//                 autoComplete="fname"
//                 name="Area"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="Area"
//                 label="Area"
//                 autoFocus
//               />
            
//             </Grid>
//             </Grid>
//             <Grid container spacing={2}>
//             <Grid item xs={12} >
//               <TextField 
//                 value={values.RoadName}
//                 onChange={handleChange("RoadName")}
//                 name="Road Name"
//                 variant="outlined"
//                 autoComplete="fname"

//                 required
//                 fullWidth
//                 id="RoadName"
//                 label="Road Name"
//                 autoFocus
                
//               />
//             </Grid>
//             </Grid>
//             <Grid container spacing={2}>
//             <Grid item xs={12} >
//               <TextField
//                 value={values.BuildingNumber}
//                 onChange={handleChange("BuildingNumber")}
//                 autoComplete="fname"
//                 name="Building Number"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="BuildingNumber"
//                 label="Building Number"
//                 autoFocus
//               />
//             </Grid>
//             </Grid>
//              <Grid container spacing={2}>
//             <Grid item xs={12} >
//               <TextField
//                 value={values.floor}
//                 onChange={handleChange("Floor")}
//                 autoComplete="fname"
//                 name="Floor"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="Floor"
//                 label="Floor"
//                 autoFocus
//               />
//             </Grid>
//             </Grid>



//             <Grid container spacing={2}>
//             <Grid item xs={12} >
//               <TextField
//                 value={values.DeliveryInstructions}
//                 onChange={handleChange("DeliveryInstructions")}
//                 autoComplete="fname"
//                 name="Delivery Instructions"
//                 variant="outlined"
//                 fullWidth
//                 id="DeliveryInstructions"
//                 label="Delivery Instructions:"
//                 autoFocus
//               />
//             </Grid>
//             </Grid>


            
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary" 
//             className={classes.submit}
//           >
//           Set location
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//             </Grid>
//             <Grid item>
//               <p id="accoutCreated"></p>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}>
//         <Copyright />
//       </Box>
//     </Container>
//   );
// }

import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar';

import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
 import AddLocationIcon from '@material-ui/icons/AddLocation';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: '100%',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    background: 'rgba(0, 0, 0, 0.94)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'rgba(0, 0, 0, 0.79)',
    color: 'white',
  },
}))

export default function Item() {
  const classes = useStyles()
  const history = useHistory()

  const [values, setValues] = React.useState({
    City: " ",
       Area:" " ,
       RoadName: " ",
       BuildingNumber:" ",
       Floor:" ",
       DeliveryInstructions:" ",
  })


  const [isOpen, setIsOpen ] = React.useState(false)

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const onSubmit = async(e) => {
    e.preventDefault()

    try {
      const token = localStorage.getItem('loggedInToken')
      const { City, Area, RoadName, BuildingNumber, Floor,DeliveryInstructions } = values

      const locations = {
        City,
           Area ,
           RoadName,
           BuildingNumber,
           Floor,
           DeliveryInstructions,
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      }

      // const bodyParameters = {
      //   category,
      // }
console.log (config)
   const result = await axios
      .post('http://localhost:7000/api/location', locations,
      config)

      if (result.status === 201 ) {
        setIsOpen(true)
        setValues(() => ({
          City: " ",
       Area:" " ,
       RoadName: " ",
       BuildingNumber:" ",
       Floor:" ",
       DeliveryInstructions:" ",
        }))
      }
    } catch(error){
        console.log(error)
      }
  }

  // const isInvalid =
  // values.name === "" ||
  // values.category  === "" ||
  // values.price === "" ||
  // values.description === "" ||
  // values.image === ""

  React.useEffect(() => {
    // there is no token, redirect to login page
    if (localStorage.getItem('loggedInToken') === null) {
      history.push('/login')
    }
  }, [])

  return (
    <Container component="main" maxWidth="xs">
           <CssBaseline />
           <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <AddLocationIcon/>
    
          </Avatar>
         <Typography component="h1" variant="h5">
              Add location
    </Typography>
            {/* <form className={classes.form} onSubmit={onSubmit} noValidate>
             <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    value={values.City}
                    onChange={handleChange("City")}
                    autoComplete="fname"
                    name="City"
                    variant="outlined"
                    required
                    fullWidth
                    id="City"
                    label="City"
                    autoFocus
                  />
                </Grid>
      </Grid> */ }
                  <form className={classes.form} onSubmit={onSubmit} noValidate>
              {/* <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={values.city}
                      onChange={handleChange('city')}
                    >
                      <MenuItem value="Amman">Amman</MenuItem>
                      <MenuItem value="Zarqa">Zarqa</MenuItem>
                      <MenuItem value="Salt">Salt</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid> */}
              {/* <Grid container spacing={2}>
                <Grid item xs={12} >
                <FormControl className={classes.city}>
             <InputLabel  value= {values.City}>City</InputLabel>
            <NativeSelect
            required >
              <option aria-label="None" value="" />
              <option value={"Amman"}>Amman</option>
              <option value={"Zarqa"}>Zarqa</option>
              <option value={"Salt"}>Salt</option>
            </NativeSelect> 
            <FormHelperText>Choose your city</FormHelperText>
          </FormControl>
                </Grid>
                </Grid> */}
                <Grid container spacing={2}>
                <Grid item xs={12} >
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
                <Grid item xs={12} >
                  <TextField 
                    value={values.RoadName}
                    onChange={handleChange("RoadName")}
                    name="Road Name"
                    variant="outlined"
                    autoComplete="fname"
    
                    required
                    fullWidth
                    id="RoadName"
                    label="Road Name"
                    autoFocus
                    
                  />
                </Grid>
                </Grid>
                <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    value={values.BuildingNumber}
                    onChange={handleChange("BuildingNumber")}
                    autoComplete="fname"
                    name="Building Number"
                    variant="outlined"
                    required
                    fullWidth
                    id="BuildingNumber"
                    label="Building Number"
                    autoFocus
                  />
                </Grid>
                </Grid>
                 <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    value={values.floor}
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
                <Grid item xs={12} >
                  <TextField
                    value={values.DeliveryInstructions}
                    onChange={handleChange("DeliveryInstructions")}
                    autoComplete="fname"
                    name="Delivery Instructions"
                    variant="outlined"
                    fullWidth
                    id="DeliveryInstructions"
                    label="Delivery Instructions:"
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
              Set location
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
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
  )
}
