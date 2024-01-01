import React from 'react'
import styles from './Header.module.css'

const Header = () => {
	return (
		<header>
			<div>
				<img className={styles.logo} src='/public/logo.png' alt='' />
			</div>
			<div className={styles.account}>
				<p className={styles.account_text}>Welcome back, Oleskii!</p>
				<img
					className={styles.account_image}
					src='/public/personal_photo.png'
					alt=''
				/>
			</div>
			<nav>
				<div className={styles.navigation_bar}>
					<p className={styles.nav_button}>Summary</p>
					<p className={styles.nav_button}>Cards</p>
					<p className={styles.nav_button}>Activity</p>
					<p className={styles.nav_button}>Recipients</p>
					<p className={styles.nav_button}>Help Center</p>
					<p className={styles.nav_button}>Earn Gifts</p>
				</div>
			</nav>
		</header>
	)
}

export default Header
