import React from 'react'
import { Form, Button } from 'react-bootstrap'
import {
	faGitlab,
	faLinkedin,
	faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './ContactForm.module.css'

export default function ContactForm() {

	return (
		<section className={styles.section} id="contact">
			<h1 className={styles.sectionHeader}>CONTACT ME</h1>
            <Form
            className={styles.contactForm}
            action="https://formspree.io/f/xvovrppr"
            method="POST"
            >
                <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>Email:</Form.Label>
                    <Form.Control type="email" name="_replyto" />
                </Form.Group>
                <Form.Group className={styles.formGroup}>
                <Form.Label className={styles.formLabel}>Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} name="message" />
                </Form.Group>
                <Button className={styles.formButton} block type="submit">Submit</Button>
            </Form>
			<div className={styles.iconList}>
				<div className={styles.iconAndLabel}>
					<a href='https://gitlab.com/jjdmolano'>
						<FontAwesomeIcon icon={faGitlab} size='4x' />
						<h3>GitLab</h3>
					</a>
				</div>
				<div className={styles.iconAndLabel}>
					<a href='mailto:jjdmolano@gmail.com'>
						<FontAwesomeIcon icon={faEnvelope} size='4x' />
						<h3>Email</h3>
					</a>
				</div>
				<div className={styles.iconAndLabel}>
					<a href='https://www.linkedin.com/in/johann-molano/'>
						<FontAwesomeIcon icon={faLinkedin} size='4x' />
						<h3>LinkedIn</h3>
					</a>
				</div>
				<div className={styles.iconAndLabel}>
					<a href='https://www.facebook.com/iamnotyoh/'>
						<FontAwesomeIcon icon={faFacebookSquare} size='4x' />
						<h3>Facebook</h3>
					</a>
				</div>
				<div className={styles.iconAndLabel}>
					<a
						href='https://drive.google.com/file/d/1aqZbrQLp8XbzY51WOIjj3acyb_gYQWOx/view?usp=sharing'
						download
					>
						<FontAwesomeIcon icon={faFile} size='4x' />
						<h3>Resume</h3>
					</a>
				</div>
			</div>
		</section>
	)
}
