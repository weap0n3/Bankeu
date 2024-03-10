import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import AddCard from '../AddCard/AddCard'
import RemoveCard from '../RemoveCard/RemoveCard'
import styles from './Cards.module.css'

const Cards = ({ cards }) => {
	const [showAddCardForm, setShowAddCardForm] = useState(false)
	const [showRemoveCardForm, setShowRemoveCardForm] = useState(false)

	const handleShowAddCardForm = () => {
		setShowAddCardForm(true)
	}

	const handleCloseAddCardForm = () => {
		setShowAddCardForm(false)
	}

	const handleShowRemoveCardForm = () => {
		setShowRemoveCardForm(true)
	}

	const handleCloseRemoveCardForm = () => {
		setShowRemoveCardForm(false)
	}

	return (
		<section className={styles.sidebar}>
			<div className={styles.sidebar_menu}>
				<div className={styles.sidebar_text}>
					<h1>Cards</h1>
					<NavLink to='/cards'>Show all</NavLink>
				</div>
				<div>
					<div className={styles.image}></div>
				</div>
				<div className={styles.action_list}>
					<ul>
						<li>
							<div className={styles.actions}>
								<img className={styles.icons} src='/credit-card.png' alt='' />
								<b>
									<a className={styles.links} href=''>
										Show Card Details
									</a>
								</b>
								<img
									className={styles.arrows}
									width={20}
									src='/next.png'
									alt=''
								/>
							</div>
						</li>
						<li>
							<div className={styles.actions}>
								<img className={styles.icons} src='/password.png' alt='' />
								<b>
									<a className={styles.links} href=''>
										Your PIN
									</a>
								</b>
								<img
									className={styles.arrows}
									width={20}
									src='/next.png'
									alt=''
								/>
							</div>
						</li>
						<li>
							<div className={styles.actions}>
								<img className={styles.icons} src='/public/lock.png' alt='' />
								<b>
									<a className={styles.links} href=''>
										Security Code
									</a>
								</b>
								<img
									className={styles.arrows}
									width={20}
									src='/public/next.png'
									alt=''
								/>
							</div>
						</li>
						<li>
							<div className={styles.actions}>
								<img
									className={styles.icons}
									src='/public/settings.png'
									alt=''
								/>
								<b>
									<a className={styles.links} href=''>
										Edit Limits
									</a>
								</b>
								<img
									className={styles.arrows}
									width={20}
									src='/public/next.png'
									alt=''
								/>
							</div>
						</li>
					</ul>
				</div>
				<div className={styles.buttons_list}>
					<button
						id={styles.add}
						className={styles.button}
						onClick={handleShowAddCardForm}
					>
						Add Card
					</button>
					<button
						id={styles.remove}
						className={styles.button}
						onClick={handleShowRemoveCardForm}
					>
						Remove
					</button>
				</div>
				{showAddCardForm && <AddCard onClose={handleCloseAddCardForm} />}
				{showRemoveCardForm && (
					<RemoveCard
						onClose={handleCloseRemoveCardForm}
						cards={cards}
						showRemoveCardForm={showRemoveCardForm}
					/>
				)}
			</div>
		</section>
	)
}

export default Cards
