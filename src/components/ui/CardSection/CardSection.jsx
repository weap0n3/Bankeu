import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useCardSection } from '../../../hooks/useCardSection'
import { CardContext } from '../../../providers/CardProvider'
import AddCard from '../AddCard/AddCard'
import RemoveCard from '../RemoveCard/RemoveCard'
import { actions } from './Actions'
import styles from './CardSection.module.css'
import Action from './Action'

const CardSection = () => {
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
						{actions.map(item => (
							<Action key={item.image} item={item} />
						))}
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
						showRemoveCardForm={showRemoveCardForm}
					/>
				)}
			</div>
		</section>
	)
}

export default CardSection
