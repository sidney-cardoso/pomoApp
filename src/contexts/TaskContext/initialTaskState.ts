import type { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
	tasks: [],
	secondsRemaining: 0,
	formattedSecondsRemaining: '11:11',
	activeTask: null,
	currentCycle: 0,
	config: {
		workTime: 25,
		shortBreakTime: 5,
		longBreakTime: 15,
	},
};
