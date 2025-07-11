import {
	HistoryIcon,
	HouseIcon,
	MoonIcon,
	SettingsIcon,
	SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
	const [theme, setTheme] = useState<AvailableThemes>(() => {
		const storageTheme =
			(localStorage.getItem('theme') as AvailableThemes) || 'dark';

		return storageTheme;
	});

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
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<nav className={styles.menu}>
			<Link
				to='/'
				className={styles['link-menu']}
				aria-label='Ir para Home'
				title='Ir para Home'
			>
				<HouseIcon />
			</Link>
			<Link
				to='/history'
				className={styles['link-menu']}
				aria-label='Ver Histórico'
				title='Ver Histórico'
			>
				<HistoryIcon />
			</Link>
			<Link
				to='/settings'
				className={styles['link-menu']}
				aria-label='Ir para Configurações'
				title='Ir para Configurações'
			>
				<SettingsIcon />
			</Link>
			<Link
				to='/'
				className={styles['link-menu']}
				aria-label='Mudar Tema'
				title='Mudar Tema'
				onClick={handleThemeChange}
			>
				{theme == 'dark' ? <SunIcon /> : <MoonIcon />}
			</Link>
		</nav>
	);
}
