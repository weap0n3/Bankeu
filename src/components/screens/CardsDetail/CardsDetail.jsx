import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../ui/Header/Header'
import Cards from '../Summary/Cards/Cards'
import Card from './Card/Card'
import styles from './CardsDetail.module.css'
import { CardService } from '../../../services/card.service'

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
					{cards.map(card => (
						<Card key={card._id} card={card} />
					))}
				</section>
			</main>
		</wrapper>
	)
}

export default CardsDetail
