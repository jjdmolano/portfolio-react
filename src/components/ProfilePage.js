import React from 'react';
import {Link} from 'react-router-dom'
import ProfilePic from '../images/profile.jpg'
import Carousel1 from '../images/carousel-1.jpg'
import Carousel2 from '../images/carousel-2.jpg'
import Carousel3 from '../images/carousel-3.jpg'
import Carousel4 from '../images/carousel-4.jpg'

function ProfilePage(){
	return(
	<main>
		<div className="content-side">
			<div id="profile-pic">
				<img src={ProfilePic} alt="" className="img-fluid"/>
			</div>
			<div className="content-side-text">
				<span id="name">Johann Molano</span>
				<br/>	
				<small>Software Developer</small>
			</div>
		</div>
		<div className="content-side-text-large">
			<span id="name">Johann Molano</span>
			<br/>	
			<small>Software Developer</small>
		</div>

		<div className="content-main">
			<h1>ABOUT ME</h1>
			<p>
				Pursuing web development as a primary field of work and as a passion.
				Previously worked in a corporate environment as a licensed mechanical engineer for 5 years. 
			</p>
			<p>
				Hobbies include listening to music, drinking coffee, and playing online games. 
			</p>	
		</div>

		<div className="content-main-2">
			<h1>MY WORK</h1>
			<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={Carousel1} className="d-block w-100" alt="..."/>
					</div>
					<div className="carousel-item">
						<img src={Carousel2} className="d-block w-100" alt="..."/>
					</div>
					<div className="carousel-item">
						<img src={Carousel3} className="d-block w-100" alt="..."/>
					</div>
					<div className="carousel-item">
						<img src={Carousel4} className="d-block w-100" alt="..."/>
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
		<div className="gallery">
			<h1>MY WORK</h1>
			<ul className="gallery-works">
				<li>
					<img src={Carousel1} className="d-block w-100" alt="..."/>
				</li>
				<li>
					<img src={Carousel2} className="d-block w-100" alt="..."/>
				</li>
				<li>
					<img src={Carousel3} className="d-block w-100" alt="..."/>
				</li>
				<li>
					<img src={Carousel4} className="d-block w-100" alt="..."/>
				</li>
			</ul>
		</div>	
	</main>
	)
}

export default ProfilePage