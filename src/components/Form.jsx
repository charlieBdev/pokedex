/* eslint-disable react/prop-types */
import { useState } from 'react';
import { badWords, getScoreToBeat, hasSwears, postScore } from '../utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Tick from './Tick';
import Cross from './Cross';

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
		if (!validInput(score, playerName)) return;

		newScoreMutation.mutate({
			name: playerName,
			score,
		});
	};

	const validInput = (score, name) => {
		const isValid =
			score !== 0 &&
			name.length > 1 &&
			name.length <= 12 &&
			!name.includes(' ') &&
			!hasSwears(badWords, name);
		return isValid;
	};

	return (
		<>
			{score > scoreToBeat && !formSubmitted && (
				<form
					onSubmit={handleSubmit}
					className='flex gap-3 justify-center pb-3'
				>
					<div className='relative flex'>
						<input
							value={playerName}
							onChange={(e) => setPlayerName(e.target.value)}
							placeholder='Enter your name'
							className='p-3 rounded shadow-lg focus:outline-none placeholder:text-neutral-400'
						/>
						<p className='absolute bottom-1 right-1 text-xs text-neutral-400'>
							{12 - playerName.length < 12 && 12 - playerName.length}
						</p>
						<p className='absolute top-1 right-1 text-green-500'>
							{playerName.length > 1 ? (
								validInput(score, playerName) ? (
									<Tick />
								) : (
									<Cross />
								)
							) : null}
						</p>
					</div>
					<button
						type='submit'
						// disabled={playerName.trim() === '' || newScoreMutation.isLoading}
						disabled={
							!validInput(score, playerName) || newScoreMutation.isLoading
						}
						className={`${
							// playerName.trim() === '' || newScoreMutation.isLoading
							!validInput(score, playerName) || newScoreMutation.isLoading
								? 'animate-pulse'
								: ''
						} border-2 border-neutral-950 shadow-lg w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl`}
					>
						Submit
					</button>
				</form>
			)}
		</>
	);
};

export default Form;
