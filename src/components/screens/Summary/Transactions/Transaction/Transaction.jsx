import React from 'react'
import styles from './Transaction.module.css'

const Transaction = () => {
	return (
		<div className={styles.info}>
			<img width={30} src='/public/anonymous.png' alt='' />
			<div>
				<p className={styles.name}>Name</p>
				<p className={styles.description}>Description</p>
			</div>
			<div>
				<p className={styles.data}>Data</p>
				<p className={styles.time}>Time</p>
			</div>
			<div>
				<p>Amount</p>
			</div>
		</div>
	)
}

export default Transaction
