import React from 'react'
import {
	faHtml5,
	faCss3Alt,
	faBootstrap,
	faJsSquare,
	faReact,
	faNodeJs,
	faJava
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Skills.module.css'

export default function Skills() {
	return (
		<section className={styles.section} id="skills">
			<h1 className={styles.sectionHeader}>SKILLS</h1>
			<div>
				<h2>FRONT-END</h2>
				<div className={styles.iconList}>
					<div className={styles.iconAndLabel}>
						<FontAwesomeIcon icon={faHtml5} size='4x' fixedWidth />
						<h3>HTML5</h3>
					</div>
					<div className={styles.iconAndLabel}>
						<FontAwesomeIcon icon={faCss3Alt} size='4x' fixedWidth />
						<h3>CSS3</h3>
					</div>
					<div className={styles.iconAndLabel}>
						<FontAwesomeIcon icon={faBootstrap} size='4x' fixedWidth />
						<h3>BOOTSTRAP</h3>
					</div>
					<div className={styles.iconAndLabel}>
						<FontAwesomeIcon icon={faJsSquare} size='4x' fixedWidth />
						<h3>JAVASCRIPT</h3>
					</div>
					<div className={styles.iconAndLabel}>
						<FontAwesomeIcon icon={faReact} size='4x' fixedWidth />
						<h3>REACT</h3>
					</div>
				</div>
                <br/>
				<h2>BACK-END</h2>
				<div className={styles.iconList}>
					<div className={styles.iconAndLabel}>
						<FontAwesomeIcon icon={faNodeJs} size='4x' fixedWidth />
						<h3>NODEJS</h3>
					</div>
					<div className={styles.iconAndLabel}>
						<FontAwesomeIcon icon={faJava} size='4x' fixedWidth />
						<h3>JAVA</h3>
					</div>
				</div>
			</div>
		</section>
	)
}
