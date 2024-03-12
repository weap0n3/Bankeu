import { CardService } from '../../../services/card.service'
import styles from './RemoveButton.module.css'

const RemoveButton = ({ card }) => {
	const removeCard = async e => {
		await CardService.deleteCard(card._id)
			.then(response => {
				console.log('successfully')
			})
			.catch(err => {
				console.log(err)
			})
	}
	return (
		<button className={styles.remove_button} onClick={e => removeCard(e)}>
			Remove Card
		</button>
	)
}

export default RemoveButton
