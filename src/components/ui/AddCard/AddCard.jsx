import { useState } from 'react'
import { CardService } from '../../../services/card.service'
import styles from './AddCard.module.css'
import Card from '../../screens/CardsDetail/Card/Card'

const clearData = {
	bankName: '',
	cardNumber: '',
	CVV: '',
	dateOfEnd: '',
}

const AddCard = ({ onClose }) => {
	const [data, setData] = useState(clearData)
	const formatCardNumberInput = e => {
		const formattedValueInput = e.replace(/\s/g, '')
		return formattedValueInput
	}
	const formatCardNumber = e => {
		if (e) {
			const formattedValue = e.replace(/\s/g, '').match(/.{1,4}/g)
			return formattedValue ? formattedValue.join(' ') : ''
		} else {
			return e
		}
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

	const handleCVVFocus = () => {
		setIsVisible(true)
	}
	const handleCVVUnFocus = () => {
		setIsVisible(false)
	}

	const createCard = async e => {
		e.preventDefault()
		data.dateOfEnd = formatDateOfEnd(data.dateOfEnd)
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
				<Card
					card={data}
					isVisible={isVisible}
					formatCardNumber={formatCardNumber}
					formatDateOfEndInput={formatDateOfEndInput}
				/>
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
									cardNumber: formatCardNumberInput(e.target.value),
								}))
							}}
							value={formatCardNumber(data.cardNumber)}
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
								value={formatDateOfEndInput(data.dateOfEnd)}
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
