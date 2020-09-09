import React from 'react'
import { Navbar } from 'react-bootstrap'

export default function NavBar() {
	return (
		<Navbar>
			<div className='navbar-logo'>
				<img src='/logo.svg' alt='logo' width='60%' className='img-fluid' />
			</div>
		</Navbar>
	)
}
