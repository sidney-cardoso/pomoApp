import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
	const [theme, setTheme] = useState<AvailableThemes>('dark');

	const handleThemeChange = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => {
		event.preventDefault();
		console.log('Changing theme');
	};

	return (
		<nav className={styles.menu}>
			<h1>{theme}</h1>
			<a
				href='#'
				className={styles['link-menu']}
				aria-label='Ir para Home'
				title='Ir para Home'
			>
				<HouseIcon />
			</a>
			<a
				href='#'
				className={styles['link-menu']}
				aria-label='Ver Histórico'
				title='Ver Histórico'
			>
				<HistoryIcon />
			</a>
			<a
				href='#'
				className={styles['link-menu']}
				aria-label='Ir para Configurações'
				title='Ir para Configurações'
			>
				<SettingsIcon />
			</a>
			<a
				href='#'
				className={styles['link-menu']}
				aria-label='Mudar Tema'
				title='Mudar Tema'
				onClick={handleThemeChange}
			>
				<SunIcon />
			</a>
		</nav>
	);
}
