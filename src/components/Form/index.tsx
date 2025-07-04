import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Form() {
	const { state, dispatch } = useTaskContext();
	const taskNameInput = useRef<HTMLInputElement>(null);

	const nextCycle = getNextCycle(state.currentCycle);
	const nextCycleType = getNextCycleType(nextCycle);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (taskNameInput.current === null) return;

		const taskName = taskNameInput.current.value.trim();

		if (!taskName) {
			alert('Por favor, insira uma tarefa.');
			taskNameInput.current.focus();
			return;
		}

		const newTask: TaskModel = {
			id: crypto.randomUUID(),
			name: taskName,
			createdAt: Date.now(),
			completedAt: null,
			interruptedAt: null,
			duration: state.config[nextCycleType],
			type: nextCycleType,
		};

		dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
	}

	function handleInterruptTask(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) {
		e.preventDefault();
		dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
	}

	return (
		<form onSubmit={handleSubmit} action='' className='form'>
			<div className='form-row'>
				<Input
					labelText=''
					type='text'
					id='task'
					placeholder='Insira sua tarefa'
					ref={taskNameInput}
					disabled={!!state.activeTask}
				/>
			</div>

			<div className='form-row'>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>

			{state.currentCycle > 0 && (
				<div className='form-row'>
					<Cycles />
				</div>
			)}

			<div className='form-row'>
				{!state.activeTask ? (
					<Button
						aria-label='Iniciar nova tarefa'
						title='Iniciar nova tarefa'
						type='submit'
						icon={<PlayCircleIcon />}
						key='play_button'
					/>
				) : (
					<Button
						aria-label='Parar tarefa'
						title='Parar tarefa'
						type='button'
						color='red'
						icon={<StopCircleIcon />}
						onClick={handleInterruptTask}
						key='stop_button'
					/>
				)}
			</div>
		</form>
	);
}
