import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

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
					<NavLink
						to='/'
						className={({ isActive }) =>
							[isActive ? styles.active : styles.notActive].join(' ')
						}
					>
						Summary
					</NavLink>
					<NavLink
						to='/cards'
						className={({ isActive }) =>
							[isActive ? styles.active : styles.notActive].join(' ')
						}
					>
						Cards
					</NavLink>
					<NavLink
						to='/activity'
						className={({ isActive }) =>
							[isActive ? styles.active : styles.notActive].join(' ')
						}
					>
						Activity
					</NavLink>
					<NavLink
						to='/recipients'
						className={({ isActive }) =>
							[isActive ? styles.active : styles.notActive].join(' ')
						}
					>
						Recipients
					</NavLink>
					<NavLink
						to='/help'
						className={({ isActive }) =>
							[isActive ? styles.active : styles.notActive].join(' ')
						}
					>
						Help Center
					</NavLink>
					<NavLink
						to='/gifts'
						className={({ isActive }) =>
							[isActive ? styles.active : styles.notActive].join(' ')
						}
					>
						Earn Gifts
					</NavLink>
				</div>
			</nav>
		</header>
	)
}

export default Header
