import React, { useEffect, useState } from 'react'
import { CardService } from '../../../services/card.service'
import Cards from '../../ui/Cards/Cards'
import Header from '../../ui/Header/Header'
import Card from './Card/Card'
import styles from './CardsDetail.module.css'
import AddCard from '../../ui/AddCard/AddCard'

const CardsDetail = () => {
	const [cards, setCards] = useState([])
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

	useEffect(() => {
		const fetchData = async () => {
			const data = await CardService.getAll()
			setCards(data)
		}

		fetchData()
	}, [cards])
	return (
		<wrapper className={styles.wrapper}>
			<Header />
			<main className={styles.main}>
				<div className={styles.sidebar}>
					<Cards setCards={setCards} />
				</div>
				<section className={styles.main_content}>
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
				</section>
			</main>
		</wrapper>
	)
}

export default CardsDetail
