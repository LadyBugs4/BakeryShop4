import React, { Component } from "react";
// import "./style.css";
import Nav from "./nav";
import login from "./login";
import SignUp from "./signup";
import Body from "./home";
import NativeSelects from "./admin";

// import Contact from "./contactus";

import SimpleBottomNavigation from "./footer";
import ButtonAppBar from "./nav";

import Footer from "./footer";
// import ProductHowItWorks from "./product";

// import { Mood, Happy, Romantic, Tarab, Sarcastic, Workout } from "./mood";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ButtonAppBar />

          <Route path="/login" component={login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/admin" component={NativeSelects} />
          {/* <Route path="/contactus" component={Contact} /> */}
       
         
          <Footer />
          {/* <Route path="/" exact component={Body} />
          <Route path="/" exact component={Body} /> */}
        </div>
      </Router>
    );
  }
}

export default App;