import styles from '../CardSection/CardSection.module.css'

const Action = ({ item }) => {
	return (
		<li>
			<div className={styles.actions}>
				<img className={styles.icons} src={item.image} alt='' />
				<a className={styles.links} href=''>
					<b>{item.text}</b>
				</a>
				<img className={styles.arrows} src='/next.png' alt='' />
			</div>
		</li>
	)
}

export default Action
