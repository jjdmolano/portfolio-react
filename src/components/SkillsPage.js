import React from 'react';
import {Link} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHtml5, faCss3Alt, faBootstrap, faJsSquare, faPhp, faPython, faNodeJs, faJava } from '@fortawesome/free-brands-svg-icons'
import { faHandshake, faPeopleArrows, faGraduationCap, faCoffee, faIdBadge, faCertificate, faUserAlt, faList, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faHtml5, faCss3Alt, faBootstrap, faJsSquare, faPhp, faPython, faNodeJs, faJava, faHandshake, faPeopleArrows, faGraduationCap, faCoffee, faIdBadge, faCertificate, faUserAlt, faList, faPhone)

function SkillsPage() {
	return(
	<main>
		<div className="content-side-skills">
			<div className="content-side-1">
				<ul className="skill-list">
					<h1>FRONT-END</h1>
					<li>
						<p>
							<FontAwesomeIcon icon={faHtml5} className ="listIcon" size="2x" fixedWidth/>
							HTML5 is the structure of web pages	
						</p>
					</li>
					<li>
							<FontAwesomeIcon icon={faCss3Alt} className ="listIcon" size="2x" fixedWidth/>
						<p>
							CSS is used to format the layout of web pages
						</p>
					</li>
					<li>
							<FontAwesomeIcon icon={faBootstrap} className ="listIcon" size="2x" fixedWidth/>
						<p>
							Bootstrap is a CSS front-end framework 
						</p>
					</li>
					<li>
							<FontAwesomeIcon icon={faJsSquare} className ="listIcon" size="2x" fixedWidth/>
						<p>
							Javascript renders web pages interactively	
						</p>
					</li>
				</ul>
			</div>
			<div className="content-side-2">
				<ul className="skill-list">	
					<h1>BACK-END</h1>
					<li>
							<FontAwesomeIcon icon={faPhp} className ="listIcon" size="2x" fixedWidth/>
						<p>
							PHP is a server-side scripting language
						</p>
					</li>
					<li>
							<FontAwesomeIcon icon={faPython} className ="listIcon" size="2x" fixedWidth/>
						<p>
							Python is a language that focuses on code readability
						</p>
					</li>
					<li>
							<FontAwesomeIcon icon={faNodeJs} className ="listIcon" size="2x" fixedWidth/>
						<p>
							NodeJS is ideally used for real-time applications
						</p>
					</li>
					<li>
							<FontAwesomeIcon icon={faJava} className ="listIcon" size="2x" fixedWidth/>
						<p>
							Java is an object-oriented language
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div className="content-skills">
			<ul className="content-center">
				<h1>QUALITIES</h1>
				<li>
					<p>
						<FontAwesomeIcon icon={faHandshake} className ="listIcon" size="2x" fixedWidth/>
					Builds great working relationships with clients</p>
				</li>
				<li>
					<p>
						<FontAwesomeIcon icon={faPeopleArrows} className ="listIcon" size="2x" fixedWidth/>
					Open to feedback and communication</p>
				</li>
				<li>
					<p>
						<FontAwesomeIcon icon={faGraduationCap} className ="listIcon" size="2x" fixedWidth/>
					Always eager to learn new skills and languages</p>
				</li>
				<li>
					<p>
						<FontAwesomeIcon icon={faCoffee} className ="listIcon" size="2x" fixedWidth/>
					Can handle variable work hours</p>
				</li>
			</ul>
			<ul className="content-center">
				<h1>QUALIFICATIONS</h1>
				<li>
					<p>
						<FontAwesomeIcon icon={faIdBadge} className ="listIcon" size="2x" fixedWidth/>
					Registered Mechanical Engineer</p>
				</li>
				<li>
					<p>
						<FontAwesomeIcon icon={faCertificate} className ="listIcon" size="2x" fixedWidth/>
					Zuitt Coding Bootcamp Certificate</p>
				</li>
			</ul>
		</div>
	</main>
	)
}

export default SkillsPage