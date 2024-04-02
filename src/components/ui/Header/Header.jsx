import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { links } from './Links'

const Header = () => {
	return (
		<header>
			<div>
				<img className={styles.logo} src='/logo.png' alt='' />
			</div>
			<div className={styles.account}>
				<p className={styles.account_text}>Welcome back, Oleskii!</p>
				<img
					className={styles.account_image}
					src='/personal_photo.png'
					alt=''
				/>
			</div>
			<nav>
				<div className={styles.navigation_bar}>
					{links.map(item => (
						<NavLink
							to={item.link}
							className={({ isActive }) =>
								[isActive ? styles.active : styles.notActive].join(' ')
							}
						>
							{item.text}
						</NavLink>
					))}
				</div>
			</nav>
		</header>
	)
}

export default Header
