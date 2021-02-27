import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import NewsAndEvents from './components/NewsAndEvents/NewsAndEvents';
import GettingInvolved from './components/GettingInvolved/GettingInvolved';
import Resources from './components/Resources/Resources';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/GettingInvolved">
          <GettingInvolved />
        </Route>
        <Route path="/NewsAndEvents">
          <NewsAndEvents />
        </Route>
        <Route path="/Resources">
          <Resources />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
