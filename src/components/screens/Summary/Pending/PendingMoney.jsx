import React from 'react'
import styles from './PendingMoney.module.css'

const PendingMoney = () => {
	return (
		<section className={styles.bottombar}>
			<div className={styles.info}>
				<img src='' alt='' />
				<p className={styles.text}>
					You have USD 1.000 pending money, it will be ready in 2 business days.
				</p>
				<a href=''>Get your money now</a>
			</div>
		</section>
	)
}

export default PendingMoney
