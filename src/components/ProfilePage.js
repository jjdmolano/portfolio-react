import React from 'react'
import About from '../components/About'
import MyWork from '../components/MyWork'
import Skills from '../components/Skills'
import Qualities from '../components/Qualities'
import ContactForm from '../components/ContactForm'
import styles from './ProfilePage.module.css'

export default function ProfilePage() {

	return (
		<main className={styles.mainPage} data-target="nav-footer">
			<About />
			<MyWork />
			<Skills />
			<Qualities />
			<ContactForm />
		</main>
	)
}
