import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../images/logo.svg'

function NavBar(){
	return(
	<div className="navbar nav-header navbar-expand-md">
		<div className="logo navbar-brand">
			<img src={Logo} width="60%" className="img-fluid"/>
		</div>
		<div className="collapse navbar-collapse">
			<ul className="nav nav-fill">
				<li className="nav-item">
				<Link to="/">
					<a className="nav-link" href="">ABOUT</a>
				</Link>
				</li>
				<li className="nav-item">
				<Link to="/skills">
					<a className="nav-link" href="">SKILLS</a>
				</Link>
				</li>
				<li className="nav-item">
				<Link to="/contact">
					<a className="nav-link" href="">CONTACT</a>
				</Link>
				</li>
			</ul>
		</div>
		
	</div>
	/*
	<div className="nav-footer">
		<ul className="nav nav-fill">
			<li className="nav-item">
				<a className="nav-link nav-foot" href="./index.html"><i className="fas fa-user-alt nav-image"></i><br/>ABOUT</a>
			</li>
			<li className="nav-item">
				<a className="nav-link nav-foot active" href="./skills.html"><i className="fas fa-list nav-image active"></i><br/>SKILLS</a>
			</li>
			<li className="nav-item">
				<a className="nav-link nav-foot" href="./contact.html"><i className="fas fa-phone nav-image"></i><br/>CONTACT</a>
			</li>
		</ul>	
	</div> */
	)
}

export default NavBar