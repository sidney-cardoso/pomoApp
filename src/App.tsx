import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Input } from './components/Input';

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
						<Input labelText='' type='text' id='task' />
					</div>

					<div className='form-row'>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>

					<div className='form-row'>
						<p>Ciclos</p>
						<p>0 0 0 0 0 0</p>
					</div>

					<div className='form-row'>
						<button>Enviar</button>
					</div>
				</form>
			</Container>
		</>
	);
}
