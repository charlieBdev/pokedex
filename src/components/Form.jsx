/* eslint-disable react/prop-types */
import { useState } from 'react';
import { getScoreToBeat, postScore } from '../utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Form = ({ score }) => {
	const queryClient = useQueryClient();
	const scoresData = queryClient.getQueryData(['scores']);
	const scoreToBeat = getScoreToBeat(scoresData);

	const [playerName, setPlayerName] = useState('');
	const [formSubmitted, setFormSubmitted] = useState(false);

	const newScoreMutation = useMutation({
		mutationFn: postScore,
		onSuccess: () => {
			setFormSubmitted(true);
			setPlayerName('');
			queryClient.invalidateQueries(['scores']);
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (score === 0 || playerName.trim() === '') return;

		newScoreMutation.mutate({
			name: playerName,
			score,
		});
	};

	return (
		<>
			{score > scoreToBeat && !formSubmitted && (
				<form onSubmit={handleSubmit} className='flex gap-3 justify-center p-3'>
					<input
						value={playerName}
						onChange={(e) => setPlayerName(e.target.value)}
						placeholder='Enter your name'
						className='p-3 rounded shadow-lg focus:outline-none'
					/>
					<button
						type='submit'
						disabled={
							playerName.trim() === '' ||
							newScoreMutation.isLoading
						}
						className={`${playerName.trim() === '' || newScoreMutation.isLoading ? '' : 'animate-pulse'} border-2 border-neutral-950 shadow-lg w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl`}
					>
						Submit
					</button>
				</form>
			)}
		</>
	);
};

export default Form;
