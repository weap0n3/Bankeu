import { useState } from 'react'
import { CardService } from '../../../services/card.service'
import Card from '../../screens/CardsDetail/Card/Card'
import styles from './AddCard.module.css'
import { applyFormat } from './addCard-formats'

const clearData = {
	bankName: '',
	cardNumber: '',
	CVV: '',
	dateOfEnd: '',
}

const AddCard = ({ onClose }) => {
	const [data, setData] = useState(clearData)

	const [isVisible, setIsVisible] = useState(false)

	const handleCVVFocus = () => {
		setIsVisible(true)
	}
	const handleCVVUnFocus = () => {
		setIsVisible(false)
	}

	const createCard = async e => {
		e.preventDefault()
		data.dateOfEnd = applyFormat(data.dateOfEnd, 'DateOfEnd')
		await CardService.addCard(data)
			.then(response => {
				console.log('successfully')
			})
			.catch(err => {
				console.log(err)
			})
		setData(clearData)
	}

	return (
		<div className={styles.modal_background}>
			<div className={styles.modal}>
				<div className={styles.f_row}>
					<p>Add your credit card details</p>
					<div className={styles.close} onClick={onClose}></div>
				</div>
				<Card card={data} isVisible={isVisible} />
				<div>
					<div className={styles.slider}></div>
					<div></div>
				</div>
				<form onSubmit={e => createCard(e)}>
					<div className={styles.details}>
						<input
							className={styles.inputs}
							placeholder='Bank Name'
							onChange={e => {
								setData(prev => ({ ...prev, bankName: e.target.value }))
							}}
							value={data.bankName}
							required
						/>
						<input className={styles.inputs} placeholder='User Name' required />
						<input
							placeholder='Card Number'
							className={styles.inputs}
							onChange={e => {
								setData(prev => ({
									...prev,
									cardNumber: applyFormat(e.target.value, 'cardNumberInput'),
								}))
							}}
							value={applyFormat(data.cardNumber, 'cardNumber')}
							maxLength={19}
							required
						/>
						<div className={styles.l_row}>
							<input
								id={styles.date}
								className={styles.inputs}
								type='data'
								placeholder='Expiry Date'
								onChange={e =>
									setData(prev => ({
										...prev,
										dateOfEnd: e.target.value,
									}))
								}
								value={applyFormat(data.dateOfEnd, 'DateOfEndInput')}
								pattern='(0[1-9]|1[0-2])\/\d{2}'
								required
							/>
							<input
								id={styles.cvv}
								className={styles.inputs}
								placeholder='CVV'
								onChange={e =>
									setData(prev => ({ ...prev, CVV: e.target.value }))
								}
								value={data.CVV}
								pattern='\d{3}'
								maxLength={3}
								onFocus={handleCVVFocus}
								onBlur={handleCVVUnFocus}
								required
							/>
						</div>
						<button type='submit' className={styles.submit}>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
export default AddCard
