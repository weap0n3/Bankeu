import React from 'react'
import styles from './Card.module.css'

const Card = ({ card }) => {
	return (
		<div className={styles.card}>
			<div>
				<p>{card.bankName}</p>
			</div>
			<div>
				<p>User Name</p>
				<p className={styles.numbers}>{card.cardNumber}</p>
			</div>
		</div>
	)
}

export default Card
