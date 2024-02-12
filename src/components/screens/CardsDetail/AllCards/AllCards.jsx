import Card from '../Card/Card'
import styles from './AllCards.module.css'

const AllCards = ({ cards }) => {
	const formatDateOfEndInput = e => {
		const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
		if (regex.test(e)) {
			const [year, month] = e.split('-')
			const formattedDateString = `${month}/${year.slice(2)}`
			return formattedDateString
		} else {
			return e
		}
	}

	const formatCardNumber = e => {
		if (e) {
			const formattedValue = e.replace(/\s/g, '').match(/.{1,4}/g)
			return formattedValue ? formattedValue.join(' ') : ''
		} else {
			return e
		}
	}

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
