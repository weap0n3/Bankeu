import Card from './Card/Card'

const AllCards = () => {
	return (
		<div className={styles.card_container}>
			{cards.map(card => (
				<Card
					key={card._id}
					card={card}
					formatCardNumber={formatCardNumber}
					formatDateOfEndInput={formatDateOfEndInput}
				/>
			))}
		</div>
	)
}

export default AllCards
