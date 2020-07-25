import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt, faList, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavFooter(){
	return(
	<nav id="nav-footer" className="nav-footer">
		<ul className="nav nav-fill">
			<li className="nav-item">
				<a className="nav-link nav-foot" href="#about">
					<FontAwesomeIcon icon={faUserAlt} className ="listIcon" size="2x" fixedWidth/>
				<br/>
				ABOUT
				</a>

			</li>
			<li className="nav-item">
				<a className="nav-link nav-foot" href="#skills">
					<FontAwesomeIcon icon={faList} className ="listIcon" size="2x" fixedWidth/>
				<br/>
				SKILLS
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link nav-foot" href="#contact">
					<FontAwesomeIcon icon={faPhone} className ="listIcon" size="2x" fixedWidth/>
				<br/>
				CONTACT
				</a>
			</li>
		</ul>	
	</nav> 
	)
}

export default NavFooter