import React from 'react'
import styles from './Contacts.module.css'

const Contacts = () => {
	return (
		<section className={styles.contacts}>
			<div>
				<p>Recent Contacts</p>
				<a href=''>All Contacts</a>
			</div>
			<div>
				<button>Add new</button>
			</div>
		</section>
	)
}

export default Contacts
