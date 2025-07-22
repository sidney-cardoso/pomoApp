import { Container } from '../../components/Container';
import { Template } from '../../templates/Template';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

import { SaveIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

import '../../styles/global.css';
import '../../styles/theme.css';

export function Settings() {
	const { state, dispatch } = useTaskContext();

	const workTimeInput = useRef<HTMLInputElement>(null);
	const shortBreakTimeInput = useRef<HTMLInputElement>(null);
	const longBreakTimeInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		document.title = 'Configurações | Chronos Pomodoro';
	}, []);

	function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		showMessage.dismiss();

		const workTime = Number(workTimeInput.current?.value);
		const shortBreakTime = Number(shortBreakTimeInput.current?.value);
		const longBreakTime = Number(longBreakTimeInput.current?.value);

		const formErrors: string[] = [];

		if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
			showMessage.warn('Digite apenas números nos campos!');
		}

		if (workTime < 10 || workTime > 90) {
			formErrors.push('O tempo de foco deve ser entre 10 e 90 minutos!');
		}
		if (shortBreakTime < 5 || shortBreakTime > 30) {
			formErrors.push(
				'O tempo de descanso curto deve ser entre 5 e 30 minutos!',
			);
		}
		if (longBreakTime < 10 || longBreakTime > 60) {
			formErrors.push(
				'O tempo de descanso longo deve ser entre 10 e 60 minutos!',
			);
		}
		if (formErrors.length > 0) {
			formErrors.forEach(error => {
				showMessage.error(error);
			});
			return;
		}

		dispatch({
			type: TaskActionTypes.CHANGE_SETTINGS,
			payload: {
				workTime,
				shortBreakTime,
				longBreakTime,
			},
		});
		showMessage.info('Configurações salvas com sucesso!');
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
							type='number'
						/>
					</div>

					<div className='form-row'>
						<Input
							id='short-break-time'
							labelText='Descanso curto'
							ref={shortBreakTimeInput}
							defaultValue={state.config.shortBreakTime}
							type='number'
						/>
					</div>

					<div className='form-row'>
						<Input
							id='long-break-time'
							labelText='Descanso longo'
							ref={longBreakTimeInput}
							defaultValue={state.config.longBreakTime}
							type='number'
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
