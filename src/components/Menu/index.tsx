import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
	const [theme, setTheme] = useState<AvailableThemes>('dark');

	const handleThemeChange = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	) => {
		event.preventDefault();

		setTheme(prevTheme => {
			const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
			return nextTheme;
		});
	};

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	return (
		<nav className={styles.menu}>
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
