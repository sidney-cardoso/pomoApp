import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { Form } from '../../components/Form';
import { Template } from '../../templates/Template';

import '../../styles/global.css';
import '../../styles/theme.css';
import type { TaskStateModel } from '../../models/TaskStateModel';

type HomeProps = {
	state: TaskStateModel;
	setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};
export function Home(props: HomeProps) {
	const { state, setState } = props;

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
