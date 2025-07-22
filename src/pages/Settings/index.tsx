import { Container } from '../../components/Container';
import { Template } from '../../templates/Template';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { SaveIcon } from 'lucide-react';
import { useRef } from 'react';

import '../../styles/global.css';
import '../../styles/theme.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Settings() {
	const { state } = useTaskContext();

	const workTimeInput = useRef<HTMLInputElement>(null);
	const shortBreakTimeInput = useRef<HTMLInputElement>(null);
	const longBreakTimeInput = useRef<HTMLInputElement>(null);

	function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const workTime = workTimeInput.current?.value;
		const shortBreakTime = shortBreakTimeInput.current?.value;
		const longBreakTime = longBreakTimeInput.current?.value;
	}

	return (
		<Template>
			<Container>
				<Heading>Configurações</Heading>
			</Container>

			<Container>
				<p style={{ textAlign: 'center' }}>
					Modifique as configurações para tempo de foco, descanso
					curto e descanso longo
				</p>
			</Container>

			<Container>
				<form onSubmit={handleSaveSettings} action='' className='form'>
					<div className='form-row'>
						<Input
							id='work-time'
							labelText='Foco'
							ref={workTimeInput}
							defaultValue={state.config.workTime}
						/>
					</div>

					<div className='form-row'>
						<Input
							id='short-break-time'
							labelText='Descanso curto'
							ref={shortBreakTimeInput}
							defaultValue={state.config.shortBreakTime}
						/>
					</div>

					<div className='form-row'>
						<Input
							id='long-break-time'
							labelText='Descanso longo'
							ref={longBreakTimeInput}
							defaultValue={state.config.longBreakTime}
						/>
					</div>

					<div className='form-row'>
						<Button
							icon={<SaveIcon />}
							aria-label='Salvar configurações'
							title='Salvar configurações'
						/>
					</div>
				</form>
			</Container>
		</Template>
	);
}
