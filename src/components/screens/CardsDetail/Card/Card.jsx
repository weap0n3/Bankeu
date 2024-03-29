import React from 'react'
import { applyFormat } from '../../../ui/AddCard/addCard-formats'
import RemoveButton from '../../../ui/RemoveButton/RemoveButton'
import styles from './Card.module.css'

const Card = ({ card, isVisible, showRemoveCardForm }) => {
	return (
		<div className={`${styles.card} ${isVisible ? styles.back_animation : ''}`}>
			<div
				id={styles.f_row}
				className={`${styles.default} ${isVisible ? styles.text_visible : ''}`}
			>
				<p>{card.bankName}</p>
				<img className={styles.logo} src='/logo.png' alt='' />
			</div>
			<div
				className={`${styles.default} ${isVisible ? styles.text_visible : ''}`}
			>
				<p id={styles.numbers}>{applyFormat(card.cardNumber, 'cardNumber')}</p>
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
							{applyFormat(card.dateOfEnd, 'DateOfEndInput')}
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
			{showRemoveCardForm && <RemoveButton card={card} />}
		</div>
	)
}

export default Card
