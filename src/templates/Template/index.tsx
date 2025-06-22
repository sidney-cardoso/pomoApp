import '../../styles/global.css';
import '../../styles/theme.css';

import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { Footer } from '../../components/Footer';
import { Menu } from '../../components/Menu';

type TemplateProps = {
	children: React.ReactNode;
};

export function Template({ children }: TemplateProps) {
	return (
		<>
			<Container>
				<Logo />
			</Container>

			<Container>
				<Menu />
			</Container>

			{children}

			<Container>
				<Footer />
			</Container>
		</>
	);
}
