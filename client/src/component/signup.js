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
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(password)
     console.log(lastName)
      console.log(firstName)
       console.log(email)

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    console.log(user)
    axios
       .post("http://localhost:7000/signup", user)
      // .then((res) => {
       
      //   document.getElementById("accoutCreated").innerText =
      //     "Account created Successfully! ";
          
      //   console.log ("orieb")

      // })
      // .catch(
      //   () =>
      //     (document.getElementById("accoutCreated").innerText =
      //       "The email is already exists! ")
      // );


 .then((res) => {
    console.log(res.data);
    if(res.data === "User authenticated"){

      // return  <Redirect  to="/see" />
      //console.log(this.props);
      //this.props.history.push('/SignUpform')}else{
        alert(' TRY AGAIN!!!')
      }


  }).catch((error) => {

      console.log(error)
  });



// axios.post('http://localhost:6060/signup',user)
//         .then(function (res) {
//           console.log(res);
//           if (res.data === "User authenticated") {
//             console.log(res.data)
//           }else{ 
//             alert(' TRY AGAIN!!!')}
    
          
//         })







    //window.location = "/login"
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={onSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={values.firstName}
                onChange={handleChange("firstName")}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={values.lastName}
                onChange={handleChange("lastName")}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={values.email}
                onChange={handleChange("email")}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={values.password}
                onChange={handleChange("password")}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="login" variant="body2">
                Already have an account? Sign in
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
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// // export default function SignUp() {
//    class Signup extends Component {
//   //const classes = useStyles();
//  constructor() {
// super()
//   // const [values, setValues] = React.useState({
//   //   firstName: "",
//   //   lastName: "",
//   //   email: "",
//   //   password: "",
//   // });
// this.state = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//         };
//         this.updateemail= this.updateemail.bind(this);
//         this.updatePassword= this.updatePassword.bind(this);
//         this.updatePassword= this.updatePassword.bind(this);
//         this.updatename1= this.updatename1.bind(this);
//         this.updatename2 = this.updatename2.bind(this);

//       }



//   // const handleChange = (prop) => (event) => {
//   //   setValues({ ...values, [prop]: event.target.value });
//   // };

//   updateemail(evt) {
//       this.setState({
//         email : evt.target.value
//       });
//     }

//     updatePassword(evt) {
//     this.setState({
//         password : evt.target.value
//       });
//     }
//     updatename1(evt) {
//     this.setState({
//        firstName: evt.target.value
//       });
//     }
//     updatename2(evt) {
//     this.setState({
//        lastName: evt.target.value
//       });
//     }
//      handleSubmit(e) {
//       e.preventDefault();
//      const user = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//     };

//     console.log(user)
//     axios
//       .post("http://localhost:6060/signup", user)
//       .then((res) => {
       
//         document.getElementById("accoutCreated").innerText =
//           "Account created Successfully! ";
//         console.log ("orieb")

//       })
//       .catch(
//         () =>
//           (document.getElementById("accoutCreated").innerText =
//             "The email is already exists! ")
//       );


// }

//   // const onSubmit = (e) => {
//   //   e.preventDefault();
//   //   var firstName = document.getElementById("firstName").value;
//   //   var lastName = document.getElementById("lastName").value;
//   //   var email = document.getElementById("email").value;
//   //   var password = document.getElementById("password").value;
//   //   console.log(password)
//   //    console.log(lastName)
//   //     console.log(firstName)
//   //      console.log(email)

//   //   const user = {
//   //     firstName: firstName,
//   //     lastName: lastName,
//   //     email: email,
//   //     password: password,
//   //   };

//   //   console.log(user)
//   //   axios
//   //     .post("http://localhost:6060/signup", user)
//   //     .then((res) => {
       
//   //       document.getElementById("accoutCreated").innerText =
//   //         "Account created Successfully! ";
//   //       console.log ("orieb")

//   //     })
//   //     .catch(
//   //       () =>
//   //         (document.getElementById("accoutCreated").innerText =
//   //           "The email is already exists! ")
//   //     );


//  // .then((res) => {
//  //    console.log(res.data);
//  //    if(res.data === "User authenticated"){

//  //      // return  <Redirect  to="/see" />
//  //      //console.log(this.props);
//  //      //this.props.history.push('/SignUpform')}else{
//  //        alert(' TRY AGAIN!!!')
//  //      }


//  //  }).catch((error) => {

//  //      console.log(error)
//  //  });



// // axios.post('http://localhost:6060/signup',user)
// //         .then(function (res) {
// //           console.log(res);
// //           if (res.data === "User authenticated") {
// //             console.log(res.data)
// //           }else{ 
// //             alert(' TRY AGAIN!!!')}
    
          
// //         })







//     //window.location = "/login"
//   //};



//   render(){
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 value={this.state.firstName}
//                 onChange={this.updatename1}
//                 autoComplete="fname"
//                 name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 value={this.this.state.lastName}
//                 onChange={this.updatename2}
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 value={this.state.email}
//                 onChange={this.updateemail}
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 value={this.state.password}
//                 onChange={this.updatePassword}
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" />}
//                 label="I want to receive inspiration, marketing promotions and updates via email."
//               />
//             </Grid>
//           </Grid>

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="login" variant="body2">
//                 Already have an account? Sign in
//               </Link>
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
// }



//export default SignUp;

