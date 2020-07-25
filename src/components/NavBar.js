import React from 'react';
import Logo from '../images/logo.svg';

function NavBar(){
	return(
	<div className="navbar nav-header navbar-expand-md">
		<div className="navbar-brand">
			<img src={Logo} width="60%" className="img-fluid"/>
		</div>
		<div className="collapse navbar-collapse nav-header-links">
			<ul className="nav nav-fill">
				<li className="nav-item">
					<a className="nav-link" href="#about">
					ABOUT
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#skills">
					SKILLS
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#contact">
					CONTACT
					</a>
				</li>
			</ul>
		</div>
	</div>
	)
}

export default NavBar