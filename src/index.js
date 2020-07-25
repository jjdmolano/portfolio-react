import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import NavBar from './components/NavBar';
import ProfilePage from './components/ProfilePage';
import NavFooter from './components/NavFooter';

const myComponent = (
		<>
		<NavBar/>
		<ProfilePage/>
		<NavFooter/>
		</>
)
const divRoot = document.getElementById('root')
ReactDOM.render(myComponent, divRoot);