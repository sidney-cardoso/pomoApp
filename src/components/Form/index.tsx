import { PlayCircleIcon } from 'lucide-react';
import { Button } from '../Button';
import { Cycles } from '../Cycles';
import { Input } from '../Input';

export function Form() {
	return (
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
	);
}
