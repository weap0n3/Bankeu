import React from 'react'
import styles from './PendingMoney.module.css'

const PendingMoney = () => {
	return (
		<section className={styles.bottombar}>
			<div className={styles.image}>
				<div className={styles.info}>
					<p className={styles.text}>
						You have USD 1.000 pending money, <br /> it will be ready in 2
						business days.
					</p>
					<a id={styles.money} href=''>
						Get your money now
					</a>
				</div>
			</div>
		</section>
	)
}

export default PendingMoney
