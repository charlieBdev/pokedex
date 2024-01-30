/* eslint-disable react/prop-types */
import { useState } from 'react';

const Form = ({ score }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(playerName);
		console.log(score);
	};
	const [playerName, setPlayerName] = useState('');

	return (
		<form onSubmit={handleSubmit} className='flex p-3 gap-3 justify-center'>
			<input
				value={playerName}
				onChange={(e) => setPlayerName(e.target.value)}
				placeholder='Enter your name'
				className='p-3 rounded'
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
