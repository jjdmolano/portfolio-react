import React from 'react';
import {Link} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGitlab, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobile, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Map, GoogleApiWrapper } from 'google-maps-react'
library.add(faGitlab, faLinkedin, faFacebookSquare, faEnvelope, faMobile, faFile)

const location = {
	address: '52 BMA Avenue, Quezon City, Philippines',
	lat: 14.6237304,
	lng: 121.0071425,
}

function ContactPage() {
	return(
	<main>
		<div className="content-form">	
			<form>
				<h1>CONTACT ME</h1>
				<div className="form-group">
					<label>Name</label>
					<input className="form-control" type="text"/>
				</div>
				<div className="form-group">
					<label>Email Address</label>
					<input type="email" className="form-control"/>
				</div>
				<div className="form-group">
					<label>Message</label>
					<textarea className="form-control" rows="3"></textarea>
				</div>
				<button type="submit" className="btn w-100">Submit</button>
			</form>
		</div>	
		<div className="content-contact">
			<ul className="content-skills fa-ul" id="contact-links">
				<li>
					<p>
						<FontAwesomeIcon icon={faGitlab} size="2x" listItem/>
						<a href="https://gitlab.com/jjdmolano" className="personal-links" target="_blank">GitLab</a>
					</p>
				</li>
				<li>
					<p>
						<FontAwesomeIcon icon={faEnvelope} size="2x" listItem/>
						<a href="mailto:jjdmolano@gmail.com" className="personal-links" target="_blank">Email</a>
					</p>
				</li>
				<li>
					<p>
						<FontAwesomeIcon icon={faLinkedin} size="2x" listItem/>
						<a href="https://www.linkedin.com/in/johann-molano/" className="personal-links" target="_blank">LinkedIn</a>
					</p>
				</li>
				<li>
					<p>
						<FontAwesomeIcon icon={faFacebookSquare} size="2x" listItem/>
						<a href="https://www.facebook.com/iamnotyoh/" className="personal-links" target="_blank">FB</a>
					</p>
				</li>
				<li>
					<p>
						<FontAwesomeIcon icon={faMobile} size="2x" listItem/>
						+63-9177155627
					</p>
				</li>
				<li>
					<p>
						<FontAwesomeIcon icon={faFile} size="2x" listItem/>
						<a href="https://drive.google.com/file/d/1aqZbrQLp8XbzY51WOIjj3acyb_gYQWOx/view?usp=sharing" className="personal-links"  target="_blank" download>My Resume</a>
					</p>
				</li>
			</ul>
		</div>
		{/*<div className="content-map map embed-responsive">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.1417439229124!2d121.00878402918632!3d14.62372649702119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b615968bd5e5%3A0xb6d3b0563744cf08!2s76a%20BMA%20Ave%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1594466075315!5m2!1sen!2sph" className="img-fluid embed-responsive-item" style={{border:0;}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		</div>*/}
	</main>
	)
}

export default ContactPage