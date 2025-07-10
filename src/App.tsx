import { Home } from './pages/Home';

import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Notification } from './components/Notification';

export function App() {
	return (
		<TaskContextProvider>
			<Notification>
				<Home />
			</Notification>
		</TaskContextProvider>
	);
}
