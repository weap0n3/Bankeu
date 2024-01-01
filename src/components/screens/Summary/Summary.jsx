import React from 'react'
import Header from '../../ui/Header/Header'
import Balance from './Balance/Balance'
import Cards from './Cards/Cards'
import Invitation from './Invitation/Invitation'
import PendingMoney from './Pending/PendingMoney'
import Contacts from './Contacts/Contacts'
import Transaction from './Transaction/Transaction'
import styles from './Summary.module.css'

const Home = () => {
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
					<Transaction />
				</div>
			</main>
		</wrapper>
	)
}

export default Home
