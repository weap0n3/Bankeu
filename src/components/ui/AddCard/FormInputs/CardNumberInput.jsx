import styles from '../AddCard.module.css'
import { applyFormat } from '../addCard-formats'

const CardNumberInput = ({ data, setData }) => {
	return (
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
	)
}

export default CardNumberInput
