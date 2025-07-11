import { Home } from './pages/Home';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { Notification } from './components/Notification';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/theme.css';
import './styles/global.css';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';

export function App() {
	return (
		<TaskContextProvider>
			<Notification>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about-pomodoro' element={<About />} />

						<Route path='*' element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Notification>
		</TaskContextProvider>
	);
}
