import React, { useRef } from 'react'
import styles from './Invitation.module.css'

const Invitation = () => {
	const ref = useRef()

	const CopyText = () => {
		const text = ref.current.textContent
		navigator.clipboard.writeText(text)
		console.log(ref)
	}
	return (
		<section className={styles.invitation}>
			<div className={styles.image}>
				<div className={styles.info}>
					<p>
						Invite a friend with code below and <br /> redeem special bonus USD
						15 from us
					</p>
					<div className={styles.code}>
						<p ref={ref}>Lorem ipsum dolor sit amet </p>
						<button className={styles.button} onClick={CopyText}>
							<img width={20} src='/public/copy.png' alt='' />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Invitation
