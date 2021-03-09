import React from 'react'
import styles from './About.module.css'

export default function About() {
	return (
		<section className={styles.section} id="about">
            <div className={styles.sectionHeader}>
			    <h1>ABOUT ME</h1>
                <img className={styles.image2} src='/about2.jpg' alt='about2' />
                <img className={styles.image} src='/about.jpg' alt='about' />
            </div>
			<p>
				Pursuing web development as a primary field of work and as a passion.
				Previously worked in a corporate environment as a licensed mechanical
				engineer for 5 years.
			</p>
			<p>
				Hobbies include listening to music, drinking coffee, and playing online
				games.
			</p>
		</section>
	)
}
