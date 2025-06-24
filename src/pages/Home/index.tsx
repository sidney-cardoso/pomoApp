import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { Form } from '../../components/Form';
import { Template } from '../../templates/Template';

import '../../styles/global.css';
import '../../styles/theme.css';

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
