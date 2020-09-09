import React from 'react'
import ReactDOM from 'react-dom';
import './style.css';
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar';
import ProfilePage from './components/ProfilePage';
import NavFooter from './components/NavFooter';

const myComponent = (
		<Container fluid>
            <NavBar/>
            <ProfilePage/>
            <NavFooter/>
		</Container>
)
const divRoot = document.getElementById('root')
ReactDOM.render(myComponent, divRoot);