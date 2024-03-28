import Card from '../Card/Card'
import styles from './AllCards.module.css'

const AllCards = ({ cards, showRemoveCardForm }) => {
	return (
		<div className={styles.card_container}>
			{cards.map(card => (
				<Card
					key={card._id}
					card={card}
					showRemoveCardForm={showRemoveCardForm}
				/>
			))}
		</div>
	)
}

export default AllCards
