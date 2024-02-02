/* eslint-disable react/prop-types */
import { useState } from 'react';
import { badWords, getScoreToBeat, hasSwears, postScore } from '../utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import confetti from 'canvas-confetti';
import { Tick, Cross } from '../components';

const Form = ({ score, data, isLoading, isError, refetch }) => {
	const [playerName, setPlayerName] = useState('');
	const [formSubmitted, setFormSubmitted] = useState(false);

	const queryClient = useQueryClient();
	const newScoreMutation = useMutation({
		mutationFn: postScore,
		onSuccess: () => {
			setFormSubmitted(true);
			setPlayerName('');
			if (score > topScore) {
				var scalar = 2;
				var gold = confetti.shapeFromText({ text: '🥇', scalar });
				confetti({
					shapes: [gold],
					scalar,
				});
			} else {
				confetti();
			}
			queryClient.invalidateQueries(['scores']);
		},
	});

	if (isLoading) {
		// return (
		// 	<p className='text-center p-3 animate-pulse'>...loading Pokéform...</p>
		// );
		return null;
	}

	if (isError) {
		refetch();
		// return (
		// 	<p className='text-center p-3 animate-pulse'>...reloading Pokéform...</p>
		// );
		return null;
	}

	let topScore = 0;

	if (data.length !== 0) {
		topScore = data[0].score || 0;
	}

	const scoreToBeat = getScoreToBeat(data);

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

	const howManyMorePoints = scoreToBeat - score + 1;

	return (
		<>
			{score > scoreToBeat && !formSubmitted && (
				<form onSubmit={handleSubmit} className='flex gap-3 justify-center p-3'>
					<div className='relative flex'>
						<input
							value={playerName}
							onChange={(e) => setPlayerName(e.target.value)}
							placeholder='Enter your name'
							className='w-44 p-3 rounded shadow-lg focus:outline-none placeholder:text-neutral-400'
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
						disabled={
							!validInput(score, playerName) || newScoreMutation.isLoading
						}
						className={`${
							!validInput(score, playerName) || newScoreMutation.isLoading
								? 'animate-pulse'
								: ''
						} border-2 border-neutral-950 shadow-lg w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl`}
					>
						Submit
					</button>
				</form>
			)}
			{score <= scoreToBeat && !formSubmitted && data.length >= 10 && (
				<p className='p-3 text-center'>
					<span className='font-bold'>{howManyMorePoints}</span> more{' '}
					{howManyMorePoints === 1 ? 'point' : 'points'} needed for legendary
					status
				</p>
			)}
		</>
	);
};

export default Form;
