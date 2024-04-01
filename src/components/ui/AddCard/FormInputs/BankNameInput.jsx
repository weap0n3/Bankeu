import styles from '../AddCard.module.css'
const BankNameInput = ({ data, setData }) => {
	return (
		<input
			className={styles.inputs}
			placeholder='Bank Name'
			onChange={e => {
				setData(prev => ({ ...prev, bankName: e.target.value }))
			}}
			value={data.bankName}
			required
			key='bankNameInput'
		/>
	)
}

export default BankNameInput
