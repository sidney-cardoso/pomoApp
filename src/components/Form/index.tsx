import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function Form() {
	const { state, setState } = useTaskContext();
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

		const secondsRemaining = newTask.duration * 60;

		setState(prevState => {
			return {
				...prevState,
				config: { ...prevState.config },
				activeTask: newTask,
				currentCycle: nextCycle,
				secondsRemaining,
				formattedSecondsRemaining:
					formatSecondsToMinutes(secondsRemaining),
				tasks: [...prevState.tasks, newTask],
			};
		});
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
				/>
			</div>

			<div className='form-row'>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>

			<div className='form-row'>
				<Cycles />
			</div>

			<div className='form-row'>
				<Button icon={<PlayCircleIcon />} />
			</div>
		</form>
	);
}
