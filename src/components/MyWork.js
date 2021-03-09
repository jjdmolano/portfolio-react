import React, { useState } from 'react'
import { faGitlab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardDeck, Card, Image, Modal } from 'react-bootstrap'
import styles from './MyWork.module.css'

export default function MyWork() {
	const [show, setShow] = useState(false)
	const [show2, setShow2] = useState(false)
	const [show3, setShow3] = useState(false)
	const showModal = () => setShow(true)
	const showModal2 = () => setShow2(true)
	const showModal3 = () => setShow3(true)
	const closeModal = () => setShow(false)
	const closeModal2 = () => setShow2(false)
	const closeModal3 = () => setShow3(false)

	return (
		<section className={styles.section}>
			<h1 className={styles.sectionHeader}>MY WORK</h1>
			<CardDeck className={styles.cardDeck}>
				<Card className={styles.card} onClick={showModal}>
					<Card.Img
						className={styles.cardLogo}
						variant='top'
						src='/budget-logo.svg'
					/>
					<Card.Body className={styles.cardBody}>
						<Card.Title className={styles.cardTitle}>
							Budget Tracking App
						</Card.Title>
						<Card.Text className={styles.cardText}>
							A budget tracking app built using MERN stack. Select for more
							details.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className={styles.card} onClick={showModal2}>
					<Card.Img
						className={styles.cardLogo}
						variant='top'
						src='/port-logo.svg'
					/>
					<Card.Body className={styles.cardBody}>
						<Card.Title className={styles.cardTitle}>
							Current Personal Portfolio
						</Card.Title>
						<Card.Text className={styles.cardText}>
							A static personal portfolio website. Select for more details.
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className={styles.card} onClick={showModal3}>
					<Card.Img
						className={styles.cardLogo}
						variant='top'
						src='/port-logo-old.svg'
					/>
					<Card.Body className={styles.cardBody}>
						<Card.Title className={styles.cardTitle}>
							Personal Portfolio
						</Card.Title>
						<Card.Text className={styles.cardText}>
							A static personal portfolio website. Select for more details.
						</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>
			<CardDeck>
				<Card className={styles.card}>
					<Card.Img
						className={styles.cardLogo3}
						variant='top'
						src='/tools-solid.svg'
					/>
					<Card.Body className={styles.cardBody}>
						<Card.Title className={styles.cardTitle}>
							Future Projects
						</Card.Title>
						<Card.Text className={styles.cardText}>
							Work in progress. Coming soon!
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className={styles.card}>
					<Card.Img
						className={styles.cardLogo3}
						variant='top'
						src='/tools-solid.svg'
					/>
					<Card.Body className={styles.cardBody}>
						<Card.Title className={styles.cardTitle}>
							Future Projects
						</Card.Title>
						<Card.Text className={styles.cardText}>
							Work in progress. Coming soon!
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className={styles.card}>
					<Card.Img
						className={styles.cardLogo3}
						variant='top'
						src='/tools-solid.svg'
					/>
					<Card.Body className={styles.cardBody}>
						<Card.Title className={styles.cardTitle}>
							Future Projects
						</Card.Title>
						<Card.Text className={styles.cardText}>
							Work in progress. Coming soon!
						</Card.Text>
					</Card.Body>
				</Card>
			</CardDeck>

			<Modal show={show} onHide={closeModal} centered size='lg'>
				<Modal.Header className={styles.modalHeader}>
					<Modal.Title className={styles.modalTitle}>
						<h3>Bookkeepr</h3>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className={styles.modalBody}>
					<Image className={styles.images} src='/cp2.jpg' alt='capstone2' />
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
			<Modal
				className={styles.modal}
				show={show2}
				onHide={closeModal2}
				centered
				size='lg'
			>
				<Modal.Header className={styles.modalHeader}>
					<Modal.Title className={styles.modalTitle}>
						<h3>Personal Portfolio</h3>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className={styles.modalBody}>
					<Image className={styles.images} src='/cp3.jpg' alt='capstone1' />
					<h4>Improved capstone project, a static personal website</h4>
					<ul>
						<li>Built using React, HTML, CSS and Bootstrap</li>
						<li>Mobile-responsive</li>
					</ul>
					<p>
						<a href='https://protected-sea-12173.herokuapp.com/'>
							&lt;Project Link&gt;
						</a>
					</p>
					<p>
						<a href='https://gitlab.com/jjdmolano/portfolio-react'>
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
			<Modal
				className={styles.modal}
				show={show3}
				onHide={closeModal3}
				centered
				size='lg'
			>
				<Modal.Header className={styles.modalHeader}>
					<Modal.Title className={styles.modalTitle}>
						<h3>Personal Portfolio</h3>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body className={styles.modalBody}>
					<Image className={styles.images} src='/cp1.jpg' alt='capstone1' />
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
		</section>
	)
}
