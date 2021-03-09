import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import styles from './NavBar.module.css'

export default function NavBar() {
	return (
		<Navbar sticky="top">
			<div className='navbar-logo'>
				<img src='/logo.svg' alt='logo' width='60%' className='img-fluid' />
			</div>
			<Nav className={styles.navLinks}>
				<Nav.Link className={styles.links} href='#about'>
					<p>ABOUT</p>
				</Nav.Link>
				<Nav.Link className={styles.links} href='#skills'>
					<p>SKILLS</p>
				</Nav.Link>
				<Nav.Link className={styles.links} href='#contact'>
					<p>CONTACT</p>
				</Nav.Link>
			</Nav>
		</Navbar>
	)
}
