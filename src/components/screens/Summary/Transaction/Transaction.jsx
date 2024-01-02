import React from 'react'
import styles from './Transaction.module.css'

const Transaction = () => {
	return (
		<section className={styles.transactions}>
			<div>
				<p>Lorem ipsum dolor sit.</p>
				<datagrid></datagrid>
				<a href=''>All Transactions</a>
			</div>
			<div>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
			</div>
		</section>
	)
}

export default Transaction
