import { Container } from '../../components/Container';
import { Template } from '../../templates/Template';
import { Heading } from '../../components/Heading';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { SaveIcon } from 'lucide-react';

import '../../styles/global.css';
import '../../styles/theme.css';

export function Settings() {
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
				<form action='' className='form'>
					<div className='form-row'>
						<Input id='work-time' labelText='Foco' />
					</div>
					<div className='form-row'>
						<Input
							id='short-break-time'
							labelText='Descanso curto'
						/>
					</div>
					<div className='form-row'>
						<Input
							id='long-break-time'
							labelText='Descanso longo'
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
