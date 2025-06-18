import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
	return (
		<nav className={styles.menu}>
			<a href='#' className={styles['link-menu']}>
				<HouseIcon />
			</a>
			<a href='#' className={styles['link-menu']}>
				<HistoryIcon />
			</a>
			<a href='#' className={styles['link-menu']}>
				<SettingsIcon />
			</a>
			<a href='#' className={styles['link-menu']}>
				<SunIcon />
			</a>
		</nav>
	);
}
