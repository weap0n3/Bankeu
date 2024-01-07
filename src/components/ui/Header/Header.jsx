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
					<a href='' className={styles.nav_button}>
						Summary
					</a>
					<a href='' className={styles.nav_button}>
						Cards
					</a>
					<a href='' className={styles.nav_button}>
						Activity
					</a>
					<a href='' className={styles.nav_button}>
						Recipients
					</a>
					<a href='' className={styles.nav_button}>
						Help Center
					</a>
					<a href='' className={styles.nav_button}>
						Earn Gifts
					</a>
				</div>
			</nav>
		</header>
	)
}

export default Header
