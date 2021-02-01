import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import styles from "./App.module.css";
import Homepage from "./components/Homepage/Homepage";
import NewsAndEvents from "./components/NewsAndEvents/NewsAndEvents";
import Navbar from "./components/Navbar/Navbar";
import GettingInvolved from "./components/GettingInvolved/GettingInvolved";
import Resources from "./components/Resources/Resources";
import AboutUs from "./components/AboutUs/AboutUs";
import NotFound from "./components/NotFound/NotFound";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
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
        {/*<Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />*/}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
