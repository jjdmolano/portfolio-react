import React from 'react';
import ProfilePic from '../images/profile.jpg';
import Carousel1 from '../images/carousel-1.jpg';
import Carousel2 from '../images/carousel-2.jpg';
import Carousel3 from '../images/carousel-3.jpg';
import Carousel4 from '../images/carousel-4.jpg';
import Carousel5 from '../images/carousel-5.jpg';
import Carousel6 from '../images/carousel-6.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHtml5, faCss3Alt, faBootstrap, faJsSquare, faReact, faPhp, faPython, faNodeJs, faJava, faGitlab, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faHandshake, faPeopleArrows, faGraduationCap, faCoffee, faIdBadge, faCertificate, faUserAlt, faList, faPhone, faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faHtml5, faCss3Alt, faBootstrap, faJsSquare, faReact, faPhp, faPython, faNodeJs, faJava, faHandshake, faPeopleArrows, faGraduationCap, faCoffee, faIdBadge, faCertificate, faUserAlt, faList, faPhone, faGitlab, faLinkedin, faFacebookSquare, faEnvelope, faFile);

function ProfilePage(){
	return(
	<main  data-spy="scroll" data-target="#nav-footer">
		<div className="about" id="about">
			<div className="about-left">
				<div className="about-left-2">
				<h1>ABOUT ME</h1>
				<p>
					Pursuing web development as a primary field of work and as a passion.
					Previously worked in a corporate environment as a licensed mechanical engineer for 5 years. 
				</p>
				<p>
					Hobbies include listening to music, drinking coffee, and playing online games. 
				</p>	
				</div>
				<div id="profile-pic">
					<img src={ProfilePic} alt="" className="img-fluid"/>
				</div>
				<div className="about-left-text">
					<span id="name">Johann Molano</span>
					<br/>	
					<small>Software Developer</small>
				</div>
			</div>

			<div className="about-right">
				<h1>ABOUT ME</h1>
				<p>
					Pursuing web development as a primary field of work and as a passion.
					Previously worked in a corporate environment as a licensed mechanical engineer for 5 years. 
				</p>
				<p>
					Hobbies include listening to music, drinking coffee, and playing online games. 
				</p>	
			</div>

			<div className="about-center-mobile">
				<h1>MY WORK</h1>
				<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={Carousel1} className="w-100" alt="..."/>
						</div>
						<div className="carousel-item">
							<img src={Carousel2} className="w-100" alt="..."/>
						</div>
						<div className="carousel-item">
							<img src={Carousel3} className="w-100" alt="..."/>
						</div>
						<div className="carousel-item">
							<img src={Carousel4} className="w-100" alt="..."/>
						</div>
					</div>
					<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next" href="	#carouselExampleCaptions" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
				</div>
			</div>

			<div className="about-center">
				<h1>MY WORK</h1>
				<div className="gallery">
					<div>
						<img src={Carousel1} className="d-block w-100" alt="..."/>
					</div>
					<div>
						<img src={Carousel2} className="d-block w-100" alt="..."/>
					</div>
					<div>
						<img src={Carousel3} className="d-block w-100" alt="..."/>
					</div>
					<div>
						<img src={Carousel4} className="d-block w-100" alt="..."/>
					</div>
					<div>
						<img src={Carousel5} className="d-block w-100" alt="..."/>
					</div>
					<div>
						<img src={Carousel6} className="d-block w-100" alt="..."/>
					</div>
				</div>
			</div>
		</div>

		<div className="scroll-text">

		</div>

		<div className="skills" id="skills">
			<div className="skills-left">
				<h1>FRONT-END</h1>
				<div className="skill-icons">
					<div className = "icon-box">
						<FontAwesomeIcon icon={faHtml5} className ="listIcon" size="4x" fixedWidth/>
						<h2>HTML5</h2>
					</div>
					<div className = "icon-box">
						<FontAwesomeIcon icon={faCss3Alt} className ="listIcon" size="4x" fixedWidth/>
						<h2>CSS3</h2>
					</div>
					<div className = "icon-box">
						<FontAwesomeIcon icon={faBootstrap} className ="listIcon" size="4x" fixedWidth/>
						<h2>BOOTSTRAP</h2>
					</div>
					<div className = "icon-box">
						<FontAwesomeIcon icon={faJsSquare} className ="listIcon" size="4x" fixedWidth/>
						<h2>JAVASCRIPT</h2>
					</div>
					<div className = "icon-box">
						<FontAwesomeIcon icon={faReact} className ="listIcon" size="4x" fixedWidth/>
						<h2>REACT</h2>
					</div>
				</div>
				<h1>BACK-END</h1>
				<div className="skill-icons">
					<div className = "icon-box">
						<FontAwesomeIcon icon={faPhp} className ="listIcon" size="4x" fixedWidth/>
						<h2>PHP</h2>
					</div>
					<div className = "icon-box">
						<FontAwesomeIcon icon={faPython} className ="listIcon" size="4x" fixedWidth/>
						<h2>PYTHON</h2>
					</div>
					<div className = "icon-box">
						<FontAwesomeIcon icon={faNodeJs} className ="listIcon" size="4x" fixedWidth/>
						<h2>NODEJS</h2>
					</div>
					<div className = "icon-box">
						<FontAwesomeIcon icon={faJava} className ="listIcon" size="4x" fixedWidth/>
						<h2>JAVA</h2>
					</div>
				</div>
			</div>
			<div className="skills-right">
				<h1>QUALITIES</h1>
				<div className="qual-list">
					<div>
							<FontAwesomeIcon icon={faHandshake} className ="listIcon" size="4x" fixedWidth/>
						<p>Experienced with clients</p>
					</div>
					<div>
							<FontAwesomeIcon icon={faPeopleArrows} className ="listIcon" size="4x" fixedWidth/>
						<p>Open to feedback</p>
					</div>
					<div>
							<FontAwesomeIcon icon={faGraduationCap} className ="listIcon" size="4x" fixedWidth/>
						<p>Always eager to learn new skills and languages</p>
					</div>
					<div>
							<FontAwesomeIcon icon={faCoffee} className ="listIcon" size="4x" fixedWidth/>
						<p>Can handle variable work hours</p>
					</div>
					<div>
							<FontAwesomeIcon icon={faIdBadge} className ="listIcon" size="4x" fixedWidth/>
						<p>Registered Mechanical Engineer</p>
					</div>
					<div>
							<FontAwesomeIcon icon={faCertificate} className ="listIcon" size="4x" fixedWidth/>
						<p>Zuitt Coding Bootcamp Certificate</p>
					</div>
				</div>
			</div>
		</div>
		<div className="scroll-text-2">

		</div>
		
		<div className="contact" id="contact">
			<div className="contact-left contact-form">	
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
			<div className="contact-center">
				<div className="contact-links">
					<div>
						<a className="personal-links" href="https://gitlab.com/jjdmolano">	
						<FontAwesomeIcon className="contact-icon" icon={faGitlab} size="3x"/>
						<p>GitLab</p>
						</a>
					</div>
					<div>
						<a href="mailto:jjdmolano@gmail.com" className="personal-links" target="_blank">
						<FontAwesomeIcon className="contact-icon" icon={faEnvelope} size="3x"/>
						<p>Email</p>
						</a>
					</div>
					<div>
						<a href="https://www.linkedin.com/in/johann-molano/" className="personal-links" target="_blank">
						<FontAwesomeIcon className="contact-icon" icon={faLinkedin} size="3x"/>
						<p>LinkedIn</p>
						</a>
					</div>
					<div>
						<a href="https://www.facebook.com/iamnotyoh/" className="personal-links" target="_blank">
						<FontAwesomeIcon className="contact-icon" icon={faFacebookSquare} size="3x"/>
						<p>Facebook</p>
						</a>
					</div>
					<div>
						<a href="https://drive.google.com/file/d/1aqZbrQLp8XbzY51WOIjj3acyb_gYQWOx/view?usp=sharing" className="personal-links"  target="_blank" download>
						<FontAwesomeIcon className="contact-icon" icon={faFile} size="3x"/>
						<p>Download Resume</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	</main>
	)
}

export default ProfilePage