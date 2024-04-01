import React, { useContext, useEffect } from 'react'
import { CardContext } from '../../../providers/CardProvider'
import { CardService } from '../../../services/card.service'
import CardSection from '../../ui/CardSection/CardSection'
import Header from '../../ui/Header/Header'
import AllCards from './AllCards/AllCards'
import styles from './CardsDetail.module.css'

const CardsDetail = () => {
	const { setCards } = useContext(CardContext)

	useEffect(() => {
		const fetchData = async () => {
			const data = await CardService.getAll()
			setCards(data)
		}

		fetchData()
	}, [])
	return (
		<div className={styles.wrapper}>
			<Header />
			<main className={styles.main}>
				<div className={styles.sidebar}>
					<CardSection />
				</div>
				<section className={styles.main_content}>
					<AllCards />
				</section>
			</main>
		</div>
	)
}

export default CardsDetail
