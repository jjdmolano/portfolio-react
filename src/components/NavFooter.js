import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { faUserAlt, faList, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './NavFooter.module.css'

export default function NavFooter() {
	return (
		<Navbar className={styles.navContainer} id="nav-footer" fixed='bottom'>
			<Nav className={styles.iconList}>
				<Nav.Link className={styles.iconAndLabel} href="#about">
					<FontAwesomeIcon
						icon={faUserAlt}
						size='2x'
						fixedWidth
					/>
                    <p>ABOUT</p>
				</Nav.Link>
				<Nav.Link className={styles.iconAndLabel} href="#skills">
					<FontAwesomeIcon
						icon={faList}
						size='2x'
						fixedWidth
					/>
					<p>SKILLS</p>
				</Nav.Link>
				<Nav.Link className={styles.iconAndLabel} href="#contact">
					<FontAwesomeIcon
						icon={faPhone}
						size='2x'
						fixedWidth
					/>
					<p>CONTACT</p>
				</Nav.Link>
			</Nav>
		</Navbar>
	)
}
