import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
	return (
		<>
			<Heading>
				Welcome to PomoAPP!
				<button>
					<TimerIcon />
				</button>
			</Heading>
			<p>
				This is a simple Pomodoro timer application built with React. It
				helps you manage your time effectively by breaking work into
				intervals, traditionally 25 minutes in length, separated by
				short breaks.
			</p>
		</>
	);
}
