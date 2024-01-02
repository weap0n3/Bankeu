import React from 'react'
import styles from './Cards.module.css'

const Cards = () => {
	return (
		<section className={styles.sidebar}>
			<div className={styles.sidebar_menu}>
				<div className={styles.sidebar_text}>
					<h1>Cards</h1>
					<a href=''>Show all</a>
				</div>
				<div>
					<div className={styles.image}></div>
				</div>
				<div className={styles.action_list}>
					<ul>
						<li>
							<div className={styles.actions}>
								<img
									className={styles.icons}
									src='/public/credit-card.png'
									alt=''
								/>
								<b>
									<a className={styles.links} href=''>
										Show Card Details
									</a>
								</b>
								<img
									className={styles.arrows}
									width={20}
									src='/public/next.png'
									alt=''
								/>
							</div>
						</li>
						<li>
							<div className={styles.actions}>
								<img
									className={styles.icons}
									src='/public/password.png'
									alt=''
								/>
								<b>
									<a className={styles.links} href=''>
										Your PIN
									</a>
								</b>
								<img
									className={styles.arrows}
									width={20}
									src='/public/next.png'
									alt=''
								/>
							</div>
						</li>
						<li>
							<div className={styles.actions}>
								<img className={styles.icons} src='/public/lock.png' alt='' />
								<b>
									<a className={styles.links} href=''>
										Security Code
									</a>
								</b>
								<img
									className={styles.arrows}
									width={20}
									src='/public/next.png'
									alt=''
								/>
							</div>
						</li>
						<li>
							<div className={styles.actions}>
								<img
									className={styles.icons}
									src='/public/settings.png'
									alt=''
								/>
								<b>
									<a className={styles.links} href=''>
										Edit Limits
									</a>
								</b>
								<img
									className={styles.arrows}
									width={20}
									src='/public/next.png'
									alt=''
								/>
							</div>
						</li>
					</ul>
				</div>
				<div className={styles.buttons_list}>
					<button id={styles.add} className={styles.button}>
						Add Card
					</button>
					<button id={styles.remove} className={styles.button}>
						Remove
					</button>
				</div>
			</div>
		</section>
	)
}

export default Cards
