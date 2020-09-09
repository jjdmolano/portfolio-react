import React from 'react'
import {
	faHandshake,
	faPeopleArrows,
	faGraduationCap,
	faCoffee,
	faIdBadge,
	faCertificate
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Qualities.module.css'

export default function Qualities() {
	return (
		<section className={styles.section}>
			<h1 className={styles.sectionHeader}>QUALITIES</h1>
			<div className={styles.iconList}>
				<div className={styles.iconAndLabel}>
					<FontAwesomeIcon icon={faHandshake} size='4x' fixedWidth />
					<p>Experienced with clients</p>
				</div>
				<div className={styles.iconAndLabel}>
					<FontAwesomeIcon icon={faPeopleArrows} size='4x' fixedWidth />
					<p>Open to feedback</p>
				</div>
				<div className={styles.iconAndLabel}>
					<FontAwesomeIcon icon={faGraduationCap} size='4x' fixedWidth />
					<p>Always eager to learn</p>
				</div>
				<div className={styles.iconAndLabel}>
					<FontAwesomeIcon icon={faCoffee} size='4x' fixedWidth />
					<p>Can handle variable work hours</p>
				</div>
				<div className={styles.iconAndLabel}>
					<FontAwesomeIcon icon={faIdBadge} size='4x' fixedWidth />
					<p>Registered Mechanical Engineer</p>
				</div>
				<div className={styles.iconAndLabel}>
					<FontAwesomeIcon icon={faCertificate} size='4x' fixedWidth />
					<p>Zuitt Coding Bootcamp Certificate</p>
				</div>
			</div>
		</section>
	)
}
