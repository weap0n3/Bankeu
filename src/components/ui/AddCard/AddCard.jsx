import { useState } from 'react'
import { CardService } from '../../../services/card.service'
import styles from './AddCard.module.css'

const AddCard = ({ onClose }) => {
	const [data, setData] = useState({
		bankName: '',
		cardNumber: '',
		CVV: '',
		dateOfEnd: '',
	})
	const formatCardNumber = input => {
		const formattedInput = input.replace(/\s/g, '').match(/.{1,4}/g)
		return formattedInput ? formattedInput.join(' ') : ''
	}
	const [isVisible, setIsVisible] = useState(false)

	const handleCVVFocus = () => {
		setIsVisible(true)
	}

	const createCard = async e => {
		e.preventDefault()
		await CardService.addCard(data)
			.then(response => {
				console.log('successfully')
			})
			.catch(err => {
				console.log(err)
			})
	}

	return (
		<div className={styles.modal_background}>
			<div className={styles.modal}>
				<div className={styles.f_row}>
					<p>Add your credit card details</p>
					<div className={styles.close} onClick={onClose}></div>
				</div>
				<div
					className={`${styles.card} ${isVisible ? styles.back_visible : ''}`}
				>
					<div className={`${isVisible ? styles.text_visible : ''}`}>
						<p>{data.bankName}</p>
					</div>
					<div className={`${isVisible ? styles.text_visible : ''}`}>
						<p id={styles.numbers}>{data.cardNumber}</p>
						<div className={styles.info}>
							<div>
								<p id={styles.cardholder}>CARDHOLDER NAME</p>
								<p>User Name</p>
							</div>
							<div>
								<p id={styles.expiry_text}>VALID THRU</p>
								<p id={styles.expiry}>{data.dateOfEnd}</p>
							</div>
						</div>
					</div>
				</div>
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
							onChange={e =>
								setData(prev => ({ ...prev, cardNumber: e.target.value }))
							}
							value={data.cardNumber}
							required
						/>
						<div className={styles.l_row}>
							<input
								id={styles.date}
								className={styles.inputs}
								type='data'
								placeholder='Expiry Date'
								onChange={e =>
									setData(prev => ({ ...prev, dateOfEnd: e.target.value }))
								}
								value={data.dateOfEnd}
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
								onFocus={handleCVVFocus}
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
