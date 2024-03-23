import { useState } from 'react'
import ConfirmForm from '../ConfirmForm/ConfirmForm'
import styles from './RemoveButton.module.css'

const RemoveButton = ({ card }) => {
	const [showConfirmRemoveCard, setShowConfirmRemoveCard] = useState(false)

	const showConfirmRemove = () => {
		setShowConfirmRemoveCard(true)
	}
	const closeConfirmRemove = () => {
		setShowConfirmRemoveCard(false)
	}

	return (
		<div>
			<button className={styles.remove_button} onClick={showConfirmRemove}>
				Remove Card
			</button>
			{showConfirmRemoveCard && (
				<div>
					<div>
						<ConfirmForm card={card} onClose={closeConfirmRemove} />
					</div>
				</div>
			)}
		</div>
	)
}

export default RemoveButton
