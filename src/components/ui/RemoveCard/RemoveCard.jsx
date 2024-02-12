import styles from './RemoveCard.module.css'
import Cards from '../Cards/Cards'

const RemoveCard = ({ onClose }) => {
	return (
		<div>
			<div></div>
			<div className={styles.close} onClick={onClose}></div>
			<div></div>
		</div>
	)
}

export default RemoveCard
