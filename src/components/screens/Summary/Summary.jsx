import React from 'react'
import Header from '../../ui/Header/Header'
import Balance from './Balance/Balance'
import Cards from './Cards/Cards'
import Invitation from './Invitation/Invitation'
import PendingMoney from './Pending/PendingMoney'
import Contacts from './Contacts/Contacts'
import Transactions from './Transactions/Transactions'
import styles from './Summary.module.css'

const Summary = () => {
	return (
		<wrapper className={styles.main}>
			<Header />
			<main className={styles.main_blocks}>
				<div className={styles.side_blocks}>
					<Cards />
					<PendingMoney />
				</div>
				<div className={styles.side_blocks}>
					<div className={styles.side_blocks_frow}>
						<Balance />
						<Invitation />
					</div>
					<Contacts />
					<Transactions />
				</div>
			</main>
		</wrapper>
	)
}

export default Summary
