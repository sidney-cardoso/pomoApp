import styles from './styles.module.css';

export function Cycles() {
	return (
		<div className={styles.cycles}>
			<span>Ciclos:</span>

			<div className={styles['cycle-dots']}>
				<span
					className={`${styles['cycle-dot']} ${styles['work-time']}`}
				></span>
				<span
					className={`${styles['cycle-dot']} ${styles['short-break-time']}`}
				></span>
				<span
					className={`${styles['cycle-dot']} ${styles['work-time']}`}
				></span>
				<span
					className={`${styles['cycle-dot']} ${styles['short-break-time']}`}
				></span>
				<span
					className={`${styles['cycle-dot']} ${styles['work-time']}`}
				></span>
				<span
					className={`${styles['cycle-dot']} ${styles['short-break-time']}`}
				></span>
				<span
					className={`${styles['cycle-dot']} ${styles['work-time']}`}
				></span>
				<span
					className={`${styles['cycle-dot']} ${styles['long-break-time']}`}
				></span>
			</div>
		</div>
	);
}
