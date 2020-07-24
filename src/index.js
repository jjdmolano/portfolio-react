import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import NavBar from './components/NavBar'
import ProfilePage from './components/ProfilePage'
import SkillsPage from './components/SkillsPage'
import ContactPage from './components/ContactPage'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const myComponent = (
	<BrowserRouter>
		<NavBar/>
		<Switch>
			<Route exact path="/" component={ProfilePage}/>
			<Route exact path="/skills" component={SkillsPage}/>
			<Route exact path="/contact" component={ContactPage}/>
		</Switch>
	</BrowserRouter>
)
const divRoot = document.getElementById('root')
ReactDOM.render(myComponent, divRoot);