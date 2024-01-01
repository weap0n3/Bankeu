import React from 'react'
import styles from './Balance.module.css'

const Balance = () => {
	return (
		<section className={styles.total_balance}>
			<div>
				<p>Total Balance</p>
			</div>
			<div>
				<p>
					{new Intl.NumberFormat('en-US', {
						style: 'currency',
						currency: 'USD',
						currencyDisplay: 'narrowSymbol',
					}).format(29475)}
				</p>
			</div>
			<div>
				<button className={styles.buttons}>Send</button>
				<button className={styles.buttons}>Request</button>
				<button className={styles.buttons}>Top Up</button>
			</div>
		</section>
	)
}

export default Balance
