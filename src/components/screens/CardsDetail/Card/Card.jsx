import React from 'react'
import styles from './Card.module.css'

const Card = ({ card, isVisible, formatCardNumber, formatDateOfEndInput }) => {
	return (
		<div className={`${styles.card} ${isVisible ? styles.back_animation : ''}`}>
			<div
				className={`${styles.default} ${isVisible ? styles.text_visible : ''}`}
			>
				<p>{card.bankName}</p>
			</div>
			<div
				className={`${styles.default} ${isVisible ? styles.text_visible : ''}`}
			>
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
			<div
				className={`${styles.back_side} ${
					isVisible ? styles.back_visible : ''
				}`}
			>
				<div className={styles.black_line}></div>
				<div className={styles.chip_line}></div>
				<p className={styles.cvv_field}>{card.CVV}</p>
			</div>
		</div>
	)
}

export default Card
