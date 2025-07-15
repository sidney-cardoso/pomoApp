import { Container } from '../../components/Container';
import { Template } from '../../templates/Template';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Button';
import { TrashIcon } from 'lucide-react';

import '../../styles/global.css';
import '../../styles/theme.css';
import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formatDate } from '../../utils/formatDate';

export function History() {
	const { state } = useTaskContext();
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
								<th>Tarefa</th>
								<th>Duração</th>
								<th>Data</th>
								<th>Status</th>
								<th>Tipo</th>
							</tr>
						</thead>
						<tbody>
							{state.tasks.map(task => (
								<tr key={task.id}>
									<td>{task.name}</td>
									<td>{task.duration}min</td>
									<td>{formatDate(task.createdAt)}</td>
									<td>{task.interruptedAt}</td>
									<td>{task.type}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Container>
		</Template>
	);
}
