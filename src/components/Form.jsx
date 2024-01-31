/* eslint-disable react/prop-types */
import { useState } from 'react';

const Form = ({ score }) => {
	const [playerName, setPlayerName] = useState('');
	const [form, setForm] = useState({
		name: '',
		score: 0,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setForm({
			name: playerName,
			score,
		});
		console.log(form.score);
	};

	return (
		<form onSubmit={handleSubmit} className='flex p-3 gap-3 justify-center'>
			<input
				value={playerName}
				onChange={(e) => setPlayerName(e.target.value)}
				placeholder='Enter your name'
				className='p-3 rounded shadow-lg focus:outline-none'
			/>
			<button
				type='submit'
				disabled={!playerName}
				className='animate-pulse border-2 border-neutral-950 shadow-lg w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl'
			>
				Submit
			</button>
		</form>
	);
};

export default Form;
