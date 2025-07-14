import { Container } from '../../components/Container';
import { Template } from '../../templates/Template';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Button';
import { TrashIcon } from 'lucide-react';

import '../../styles/global.css';
import '../../styles/theme.css';
import styles from './styles.module.css';

export function History() {
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
							{Array.from({ length: 10 }).map((_, index) => (
								<tr key={index}>
									<td>Tarefa {index + 1}</td>
									<td>25min</td>
									<td>14/07/2025</td>
									<td>Completa</td>
									<td>Foco</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</Container>
		</Template>
	);
}
