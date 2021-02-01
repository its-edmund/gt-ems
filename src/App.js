<<<<<<< HEAD
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import styles from './App.module.css';
import Homepage from './components/Homepage/Homepage';
import NewsAndEvents from './components/NewsAndEvents/NewsAndEvents';
import Navbar from './components/Navbar/Navbar';
import GettingInvolved from './components/GettingInvolved/GettingInvolved';
import Resources from './components/Resources/Resources';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
=======
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import NewsAndEvents from "./components/NewsAndEvents/NewsAndEvents";
import Navbar from "./components/Navbar/Navbar";
import GettingInvolved from "./components/GettingInvolved/GettingInvolved";
import Resources from "./components/Resources/Resources";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from './components/Footer/Footer'
>>>>>>> 61f0186 (fix: suppress warnings)

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/GettingInvolved">
          <GettingInvolved />
        </Route>
        <Route exact path="/NewsAndEvents">
          <NewsAndEvents />
        </Route>
        <Route exact path="/Resources">
          <Resources />
        </Route>
        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
