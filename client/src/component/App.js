import React, { Component } from "react";
// import "./style.css";
import Nav from "./nav";
import login from "./login";
import Signup from "./signup";
import Body from "./home";
import Categories from "./categories";
import Product from "./product";


import ProductHowItWorks from "./product";
import RecipeReviewCard from "./bread";
import Recipe from "./dessert";
import RecipeCookies from "./cookies";
import ProductCategories from "./home"

//admin :
import Item  from "./admin"
// import  Contact from "./contactus";

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
          <Route path="/" exact component={ProductCategories} />

          <Route path="/login" component={login} />
          <Route path="/signup" component={Signup} />
          <Route path ="/admin" component={Item} />
          <Route path ="/categories" component={Categories} />

         
          {/* <Route path="/contactus" component={Contact} /> */}

          <Route path="/ProductHowItWorks" component={ProductHowItWorks} />

          <Route path="/bread" component={RecipeReviewCard} />
          <Route path="/dessert" component={Recipe} />
          <Route path="/cookies" component={RecipeCookies} />
          <Footer />
          
          {/* <Route path="/" exact component={Body} />
          <Route path="/" exact component={Body} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
