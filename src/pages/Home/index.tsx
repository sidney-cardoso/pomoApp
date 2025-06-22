import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { Form } from '../../components/Form';
import '../../styles/global.css';
import '../../styles/theme.css';

import { Template } from '../../templates/Template';

export function Home() {
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
