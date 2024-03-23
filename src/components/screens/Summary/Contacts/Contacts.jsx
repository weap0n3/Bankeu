import React from 'react'
import styles from './Contacts.module.css'

const Contacts = () => {
	return (
		<section className={styles.contacts}>
			<div className={styles.info}>
				<p>Recent Contacts</p>
				<a href=''>All Contacts</a>
			</div>
			<div className={styles.contacts_list}>
				<div className={styles.contact}>
					<img width={50} src='/add-user.png' alt='' />
					<p>Add</p>
				</div>
				<div className={styles.contact}>
					<img width={50} src='/anonymous.png' alt='' />
					<p>Name</p>
				</div>
				<div className={styles.contact}>
					<img width={50} src='/anonymous.png' alt='' />
					<p>Name</p>
				</div>
				<div className={styles.contact}>
					<img width={50} src='/anonymous.png' alt='' />
					<p>Name</p>
				</div>
				<div className={styles.contact}>
					<img width={50} src='/anonymous.png' alt='' />
					<p>Name</p>
				</div>
				<div className={styles.contact}>
					<img width={50} src='/anonymous.png' alt='' />
					<p>Name</p>
				</div>
			</div>
		</section>
	)
}

export default Contacts
