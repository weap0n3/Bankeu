import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useCardSection } from '../../../hooks/useCardSection'
import { CardContext } from '../../../providers/CardProvider'
import AddCard from '../AddCard/AddCard'
import RemoveCard from '../RemoveCard/RemoveCard'
import styles from './CardSection.module.css'

const CardSection = () => {
	const { cards } = useContext(CardContext)

	const {
		showAddCardForm,
		showRemoveCardForm,
		handleShowAddCardForm,
		handleCloseAddCardForm,
		handleShowRemoveCardForm,
		handleCloseRemoveCardForm,
	} = useCardSection()

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
								<a className={styles.links} href=''>
									<b>Show Card Details</b>
								</a>
								<img className={styles.arrows} src='/next.png' alt='' />
							</div>
						</li>
						<li>
							<div className={styles.actions}>
								<img className={styles.icons} src='/password.png' alt='' />
								<a className={styles.links} href=''>
									<b>Your PIN</b>
								</a>
								<img className={styles.arrows} src='/next.png' alt='' />
							</div>
						</li>
						<li>
							<div className={styles.actions}>
								<img className={styles.icons} src='/lock.png' alt='' />
								<a className={styles.links} href=''>
									<b>Security Code</b>
								</a>
								<img className={styles.arrows} src='/next.png' alt='' />
							</div>
						</li>
						<li>
							<div className={styles.actions}>
								<img className={styles.icons} src='/settings.png' alt='' />
								<a className={styles.links} href=''>
									<b>Edit Limits</b>
								</a>
								<img className={styles.arrows} src='/next.png' alt='' />
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

export default CardSection
