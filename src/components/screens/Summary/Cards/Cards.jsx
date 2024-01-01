import React from 'react'
import styles from './Cards.module.css'

const Cards = () => {
	return (
		<section className={styles.sidebar}>
			<div className={styles.sidebar_menu}>
				<div className={styles.sidebar_text}>
					<p>Cards</p>
					<a href=''>Show all</a>
				</div>
				<img className={styles.image} src='/public/creditcard.jpg' alt='' />
				<div className={styles.action_list}>
					<ul>
						<li>
							<div>
								<img src='' alt='' />
								<a href=''>Show Card Details</a>
							</div>
						</li>
						<li>
							<div>
								<a href=''>Your PIN</a>
							</div>
						</li>
						<li>
							<div>
								<a href=''>Security Code</a>
							</div>
						</li>
						<li>
							<div>
								<a href=''>Edit Limits</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Cards
