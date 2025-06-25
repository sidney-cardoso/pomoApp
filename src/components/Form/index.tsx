import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

export function Form() {
	const { state, setState } = useTaskContext();
	const taskNameInput = useRef<HTMLInputElement>(null);

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
			duration: 1,
			type: 'workTime',
		};

		const secondsRemaining = newTask.duration * 60;

		setState(prevState => {
			return {
				...prevState,
				config: { ...prevState.config },
				currentCycle: 1,
				secondsRemaining,
				formattedSecondsRemaining: '00:00',
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
