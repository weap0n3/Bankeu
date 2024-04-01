import { useAddCard } from '../../../hooks/useAddCard'
import Card from '../../screens/CardsDetail/Card/Card'
import styles from './AddCard.module.css'
import BankNameInput from './FormInputs/BankNameInput'
import CVVInput from './FormInputs/CVVInput'
import CardNumberInput from './FormInputs/CardNumberInput'
import DateOfEndInput from './FormInputs/DateOfEndInput'

const AddCard = ({ onClose }) => {
	const {
		data,
		setData,
		isVisible,
		createCard,
		handleCVVFocus,
		handleCVVUnFocus,
	} = useAddCard()

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
						<BankNameInput setData={setData} data={data} />
						<input className={styles.inputs} placeholder='User Name' required />
						<CardNumberInput setData={setData} data={data} />
						<div className={styles.l_row}>
							<DateOfEndInput setData={setData} data={data} />
							<CVVInput
								setData={setData}
								data={data}
								handleCVVFocus={handleCVVFocus}
								handleCVVUnFocus={handleCVVUnFocus}
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
