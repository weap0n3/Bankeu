import styles from '../AddCard.module.css'
import { applyFormat } from '../addCard-formats'

const DateOfEndInput = ({ data, setData }) => {
	return (
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
			pattern='(0[1-9]|1[0-2])/\d{2}'
			required
		/>
	)
}

export default DateOfEndInput
