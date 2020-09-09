import React, { useState } from 'react'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Image, Modal } from 'react-bootstrap'
import styles from './MyWork.module.css'

export default function MyWork() {
	const [show, setShow] = useState(false)
	const [show2, setShow2] = useState(false)
	const showModal = () => setShow(true)
	const showModal2 = () => setShow2(true)
	const closeModal = () => setShow(false)
	const closeModal2 = () => setShow2(false)

	return (
		<section className={styles.section}>
			<h1 className={styles.sectionHeader}>MY WORK</h1>
			<div>
				<p>Click/tap images for more info</p>
				<Button className={styles.modalButton} block onClick={showModal}>
					<Image className={styles.images} src='/cp2.jpg' alt='capstone2' />
				</Button>
				<Modal show={show} onHide={closeModal} centered size='lg'>
					<Modal.Header className={styles.modalHeader}>
						<Modal.Title className={styles.modalTitle}>
							<h3>Bookkeepr</h3>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className={styles.modalBody}>
						<h4>
							Second capstone project, a fully functional budget tracker using
							MERN stack
						</h4>
						<ul>
							<li>
								Built using NextJS for front end, and Mongoose, ExpressJS, and
								NodeJS for back end
							</li>
							<li>
								Built a REST API with full CRUD capabilities, can create, read,
								update and delete transactions/records
							</li>
							<li>Working user registration and login feature</li>
							<li>Integrated Google account login feature</li>
							<li>
								Integrated donut and line charts to see trends and breakdowns of
								your account
							</li>
						</ul>
						<p>
							<a href='https://molano-capstone-2-client.vercel.app/'>
								&lt;Project Link&gt;
							</a>
						</p>
						<p>
							<a href='https://gitlab.com/jjdmolano/capstone-2-client'>
								&lt;
								<FontAwesomeIcon
									className={styles.modalIcon}
									icon={faGitlab}
									size='lg'
								/>{' '}
								Client Source Code&gt;
							</a>
						</p>
						<p>
							<a href='https://gitlab.com/jjdmolano/capstone-2-api'>
								&lt;
								<FontAwesomeIcon
									className={styles.modalIcon}
									icon={faGitlab}
									size='lg'
								/>{' '}
								API Source Code&gt;
							</a>
						</p>
					</Modal.Body>
				</Modal>
			</div>
			<br />
			<div>
				<Button className={styles.modalButton} block onClick={showModal2}>
					<Image className={styles.images} src='/cp1.jpg' alt='capstone1' />
				</Button>
				<Modal show={show2} onHide={closeModal2} centered size='lg'>
					<Modal.Header className={styles.modalHeader}>
						<Modal.Title className={styles.modalTitle}>
							<h3>Personal Portfolio</h3>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className={styles.modalBody}>
						<h4>First capstone project, a static personal website</h4>
						<ul>
							<li>Built using HTML, CSS and Bootstrap</li>
							<li>Mobile-responsive</li>
						</ul>
						<p>
							<a href='https://jjdmolano.gitlab.io/jjdm-portfolio/'>
								&lt;Project Link&gt;
							</a>
						</p>
						<p>
							<a href='https://gitlab.com/jjdmolano/jjdm-portfolio'>
								&lt;
								<FontAwesomeIcon
									className={styles.modalIcon}
									icon={faGitlab}
									size='lg'
								/>{' '}
								Source Code&gt;
							</a>
						</p>
					</Modal.Body>
				</Modal>
			</div>
		</section>
	)
}
