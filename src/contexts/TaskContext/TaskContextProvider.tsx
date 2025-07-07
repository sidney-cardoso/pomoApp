import { useEffect, useReducer } from 'react';
import { TaskContext } from './TaskContext';
import { initialTaskState } from './initialTaskState';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/timeWorkerManager';

type TaskContextProviderProps = {
	children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
	const [state, dispatch] = useReducer(taskReducer, initialTaskState);

	const worker = TimerWorkerManager.getInstance();

	worker.onmessage(e => {
		const countdownSeconds = e.data;

		console.log(countdownSeconds);
		if (countdownSeconds === 0) {
			console.log('Task completa');

			state.activeTask = null;

			worker.terminate();
		}
	});

	useEffect(() => {
		if (!state.activeTask) {
			console.log('Worker terminado por falta de task ativa');
			worker.terminate();
		}

		if (state.activeTask) {
			worker.postMessage(state);
		}
	}, [worker, state]);

	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
}
