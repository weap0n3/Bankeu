import React from 'react'
import styles from './Transactions.module.css'
import Transaction from './Transaction/Transaction'

const Transactions = () => {
	return (
		<section className={styles.transactions}>
			<div className={styles.info}>
				<p>Transactions History</p>
				<input type='date' />
				<button>All Transactions</button>
			</div>
			<div>
				<Transaction />
			</div>
		</section>
	)
}
export default Transactions
