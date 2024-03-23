import { useState } from 'react'
import { CardService } from '../../../services/card.service'
import styles from './ConfirmForm.module.css'

const ConfirmForm = ({ card, onClose }) => {
	const [confirmedCVV, confirmCVV] = useState()
	const removeCard = async e => {
		if (confirmedCVV == card.CVV) {
			await CardService.deleteCard(card._id)
				.then(response => {
					console.log('successfully')
				})
				.catch(err => {
					console.log(err)
				})
		} else {
			console.log('wrong')
		}
	}
	return (
		<div className={styles.modal_background}>
			<div className={styles.modal}>
				<div className={styles.info}>
					<div className={styles.titles}>
						<p className={styles.text}>Confirm Form</p>
						<div className={styles.close} onClick={onClose}></div>
					</div>
					<p>Are you sure deleting card which ends with {card.cardNumber}</p>
					<div className={styles.confirm_input}>
						<p>Enter your CVV: </p>
						<input
							className={styles.inputs}
							maxLength={3}
							onChange={e => {
								confirmCVV(e.target.value)
							}}
						/>
					</div>
					<div className={styles.confirm_button}>
						<button className={styles.button} onClick={e => removeCard(e)}>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConfirmForm
