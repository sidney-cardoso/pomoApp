import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';
import { Cycles } from './components/Cycles';
import { Button } from './components/Button';
import { PlayCircleIcon } from 'lucide-react';

export function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>

			<Container>
				<Menu />
			</Container>

			<Container>
				<CountDown />
			</Container>

			<Container>
				<form action='' className='form'>
					<div className='form-row'>
						<Input
							labelText=''
							type='text'
							id='task'
							placeholder='Insira sua tarefa'
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
			</Container>
		</>
	);
}
