import AllCards from '../../screens/CardsDetail/AllCards/AllCards'
import styles from './RemoveCard.module.css'

const RemoveCard = ({ onClose, showRemoveCardForm }) => {
	return (
		<div>
			<div></div>
			<div>
				<div className={styles.content_background}>
					<div className={styles.content}>
						<div className={styles.info}>
							<p>Choose card you want to delete</p>
							<div className={styles.close} onClick={onClose}></div>
						</div>
						<AllCards showRemoveCardForm={showRemoveCardForm} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default RemoveCard
