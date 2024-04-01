import React from 'react'
import CardSection from '../../ui/CardSection/CardSection'
import Header from '../../ui/Header/Header'
import Balance from './Balance/Balance'
import Contacts from './Contacts/Contacts'
import Invitation from './Invitation/Invitation'
import styles from './Summary.module.css'
import Transactions from './Transactions/Transactions'

const Summary = () => {
	return (
		<wrapper className={styles.main}>
			<Header />
			<main className={styles.main_blocks}>
				<div className={styles.side_blocks}>
					<CardSection />
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
