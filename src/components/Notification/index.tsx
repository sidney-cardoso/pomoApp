import { Bounce, ToastContainer } from 'react-toastify';

type MessageProps = {
	children: React.ReactNode;
};

export function Notification({ children }: MessageProps) {
	return (
		<>
			{children}
			<ToastContainer
				position='top-right'
				autoClose={10000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
				transition={Bounce}
			/>
		</>
	);
}
