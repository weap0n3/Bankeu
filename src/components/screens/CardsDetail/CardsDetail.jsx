import React, { useContext, useEffect, useState } from 'react'
import { CardService } from '../../../services/card.service'
import Cards from '../../ui/Cards/Cards'
import Header from '../../ui/Header/Header'
import AllCards from './AllCards/AllCards'
import styles from './CardsDetail.module.css'
import { CardContext } from '../../../providers/CardProvider'

const CardsDetail = () => {
	const { cards, setCards } = useContext(CardContext)

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
					<Cards cards={cards} />
				</div>
				<section className={styles.main_content}>
					<AllCards cards={cards} />
				</section>
			</main>
		</wrapper>
	)
}

export default CardsDetail
