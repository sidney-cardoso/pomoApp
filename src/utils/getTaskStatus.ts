import type { TaskModel } from '../models/TaskModel';

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
	if (task.completedAt) return 'Completa';
	if (task.interruptedAt) return 'Interrompida';
	if (task.id === activeTask?.id) return 'Em progresso';
	return 'Abandonada';
}
