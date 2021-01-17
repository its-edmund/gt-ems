import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';
import Homepage from './components/Homepage/Homepage';
import NewsAndEvents from './components/NewsAndEvents/NewsAndEvents'
import Navbar from './components/Navbar/Navbar'
import GettingInvolved from './components/GettingInvolved/GettingInvolved'
import Resources from './components/Resources/Resources'
import AboutUs from './components/AboutUs/AboutUs'

function App() {
  return (
		<Router>
		  <Navbar />
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route exact path='/GettingInvolved'>
					<GettingInvolved />
				</Route>
				<Route exact path='/NewsAndEvents'>
					<NewsAndEvents />
				</Route>
				<Route exact path='/Resources'>
					<Resources />
				</Route>
				<Route exact path='/AboutUs'>
					<AboutUs />
				</Route>
			</Switch>
		</Router>
  );
}

export default App;
