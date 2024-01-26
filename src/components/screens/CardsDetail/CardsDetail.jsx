import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../../ui/Header/Header'
import Cards from '../Summary/Cards/Cards'
import Card from './Card/Card'
import styles from './CardsDetail.module.css'

const CardsDetail = () => {
	const [cards, setCards] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:3002/getCards')
			.then(response => {
				setCards(response.data)
			})
			.catch(error => console.error(error))
	}, [])
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.sidebar}>
				<Cards />
			</div>
			<main className={styles.main}>
				<section className={styles.main_content}>
					{cards.map(card => (
						<Card key={card._id} card={card} />
					))}
				</section>
			</main>
		</div>
	)
}

export default CardsDetail
