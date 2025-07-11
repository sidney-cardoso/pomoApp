import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Notification } from './components/Notification';
import { MainRouter } from './routers/mainRouter';

import './styles/theme.css';
import './styles/global.css';

export function App() {
	return (
		<TaskContextProvider>
			<Notification>
				<MainRouter />
			</Notification>
		</TaskContextProvider>
	);
}
