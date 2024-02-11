import React, { useState } from 'react'
import styles from './Card.module.css'

const Card = ({ card }) => {
	const formatCardNumberInput = e => {
		const formattedValueInput = e.replace(/\s/g, '')
		return formattedValueInput
	}
	const formatCardNumber = e => {
		const formattedValue = e.replace(/\s/g, '').match(/.{1,4}/g)
		return formattedValue ? formattedValue.join(' ') : ''
	}
	const formatDateOfEnd = e => {
		console.log(e)
		const [month, year] = e.split('/')
		const date = new Date(`20${year}`, month)
		const formattedDate = date.toISOString().slice(0, 10)
		return formattedDate
	}

	const formatDateOfEndInput = e => {
		const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
		if (regex.test(e)) {
			const [year, month] = e.split('-')
			const formattedDateString = `${month}/${year.slice(2)}`
			return formattedDateString
		} else {
			return e
		}
	}

	const [isVisible, setIsVisible] = useState(false)
	return (
		<div className={styles.card}>
			<div>
				<p>{card.bankName}</p>
			</div>
			<div>
				<p id={styles.numbers}>{formatCardNumber(card.cardNumber)}</p>
				<div className={styles.info}>
					<div>
						<p id={styles.cardholder}>CARDHOLDER NAME</p>
						<p>User Name</p>
					</div>
					<div>
						<p id={styles.expiry_text}>VALID THRU</p>
						<p
							className={`${styles.expiry} ${
								card.dateOfEnd != '' ? styles.expiry_active : ''
							}`}
						>
							{formatDateOfEndInput(card.dateOfEnd)}
						</p>
					</div>
				</div>
			</div>
			<div className={styles.back_side}>
				<div className={styles.black_line}></div>
				<div className={styles.chip_line}></div>
				<p className={styles.cvv_field}>{card.CVV}</p>
			</div>
		</div>
	)
}

export default Card
