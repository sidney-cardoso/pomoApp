import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { Form } from '../../components/Form';
import { Template } from '../../templates/Template';

import { useEffect } from 'react';

import '../../styles/global.css';
import '../../styles/theme.css';

export function Home() {
	useEffect(() => {
		document.title = ' Chronos Pomodoro';
	}, []);

	return (
		<Template>
			<Container>
				<CountDown />
			</Container>
			<Container>
				<Form />
			</Container>
		</Template>
	);
}
