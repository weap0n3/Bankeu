import React, { useEffect, useState } from 'react'
import { CardService } from '../../../services/card.service'
import Cards from '../../ui/Cards/Cards'
import Header from '../../ui/Header/Header'
import Card from './Card/Card'
import styles from './CardsDetail.module.css'

const CardsDetail = () => {
	const [cards, setCards] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await CardService.getAll()
			setCards(data)
		}

		fetchData()
	}, [])
	return (
		<wrapper className={styles.wrapper}>
			<Header />
			<main className={styles.main}>
				<div className={styles.sidebar}>
					<Cards />
				</div>
				<section className={styles.main_content}>
					<div className={styles.card_container}>
						{cards.map(card => (
							<Card key={card._id} card={card} />
						))}
					</div>
				</section>
			</main>
		</wrapper>
	)
}

export default CardsDetail
