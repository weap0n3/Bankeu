import styles from '../AddCard.module.css'

const CVVInput = ({ data, setData, handleCVVFocus, handleCVVUnFocus }) => {
	return (
		<input
			id={styles.cvv}
			className={styles.inputs}
			placeholder='CVV'
			onChange={e => setData(prev => ({ ...prev, CVV: e.target.value }))}
			value={data.CVV}
			pattern='\d{3}'
			maxLength={3}
			onFocus={handleCVVFocus}
			onBlur={handleCVVUnFocus}
			required
		/>
	)
}

export default CVVInput
