import { Container } from '../../components/Container';
import { Template } from '../../templates/Template';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Button';

import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';
import { type SortTaskOptions, sortTasks } from '../../utils/sortTasks';

import '../../styles/global.css';
import '../../styles/theme.css';
import styles from './styles.module.css';

export function History() {
	const { state } = useTaskContext();
	const [sortTaskOptions, setSortTaskOptions] = useState<SortTaskOptions>(
		() => {
			return {
				tasks: sortTasks({ tasks: state.tasks }),
				field: 'createdAt',
				direction: 'desc',
			};
		},
	);

	function handlesSortTasks({ field }: Pick<SortTaskOptions, 'field'>) {
		const newDirection =
			sortTaskOptions.direction === 'desc' ? 'asc' : 'desc';

		setSortTaskOptions({
			tasks: sortTasks({
				direction: newDirection,
				tasks: sortTaskOptions.tasks,
				field,
			}),
			direction: newDirection,
			field,
		});
	}

	return (
		<Template>
			<Container>
				<Heading>
					<span>Histórico</span>
					<span className={styles['button-container']}>
						<Button
							icon={<TrashIcon />}
							color='red'
							aria-label='Apagar histórico'
							title='Apagar histórico'
						/>
					</span>
				</Heading>
			</Container>
			<Container>
				<div className={styles['responsive-table']}>
					<table>
						<thead>
							<tr>
								<th
									onClick={() =>
										handlesSortTasks({ field: 'name' })
									}
									className={styles['th-sort']}
								>
									Tarefa ↕
								</th>
								<th
									onClick={() =>
										handlesSortTasks({ field: 'duration' })
									}
									className={styles['th-sort']}
								>
									Duração ↕
								</th>
								<th
									onClick={() =>
										handlesSortTasks({ field: 'createdAt' })
									}
									className={styles['th-sort']}
								>
									Data ↕
								</th>
								<th>Status</th>
								<th>Tipo</th>
							</tr>
						</thead>
						<tbody>
							{sortTaskOptions.tasks.map(task => {
								const taskTypeDictionary = {
									workTime: 'Foco',
									shortBreakTime: 'Descanso curto',
									longBreakTime: 'Descanso longo',
								};
								return (
									<tr key={task.id}>
										<td>{task.name}</td>
										<td>{task.duration}min</td>
										<td>{formatDate(task.createdAt)}</td>
										<td>
											{getTaskStatus(
												task,
												state.activeTask,
											)}
										</td>
										<td>{taskTypeDictionary[task.type]}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</Container>
		</Template>
	);
}
