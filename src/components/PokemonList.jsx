/* eslint-disable no-unused-vars */
import PokemonCard from './PokemonCard';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchPokemon, getRandomIndex } from '../utils';
import Question from './Question';

const PokemonList = () => {
	const [randomIndex, setRandomIndex] = useState(getRandomIndex());
	const [isAnyClicked, setIsAnyClicked] = useState(false);
	const [isLoadingNext, setIsLoadingNext] = useState(false);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [time, setTime] = useState(60);

	const { data, isLoading, isError, error, refetch } = useQuery({
		queryKey: ['pokemon'],
		queryFn: fetchPokemon,
	});

	const handleClickNext = async () => {
		if (gameOver) {
			setScore(0);
			setTime(60);
		}
		setGameOver(false);
		setIsLoadingNext(true);
		await refetch();
		setIsLoadingNext(false);
		setRandomIndex(getRandomIndex());
		setIsAnyClicked(false);
	};

	useEffect(() => {
		let timerInterval;

		if (!gameOver && time > 0 && !isLoading && !isLoadingNext) {
			timerInterval = setInterval(() => {
				// setTime((prevTime) => prevTime - 1);
				setTime(time - 1);
				// console.log(time, '<<< time');
				if (time - 1 === 0) {
					setGameOver(true);
					clearInterval(timerInterval);
				}
			}, 1000);
		}

		// Cleanup the interval when the component unmounts or when the game is over
		return () => clearInterval(timerInterval);
	}, [time, gameOver, isLoading, isLoadingNext]);

	if (isLoading) {
		return <p className='text-center p-3'>Loading...</p>;
	}

	if (isError) {
		return <p className='text-center p-3'>{error}</p>;
	}

	return (
		<div className='flex flex-col gap-3'>
			<Question correctAnswer={data[randomIndex].name} />
			<div className='flex flex-wrap justify-center gap-3'>
				{data.map((query, index) => (
					<PokemonCard
						key={query.id}
						name={query.name}
						url={query.sprites.front_default}
						isCorrect={index === randomIndex}
						isAnyClicked={isAnyClicked}
						setIsAnyClicked={setIsAnyClicked}
						score={score}
						setScore={setScore}
						setGameOver={setGameOver}
					/>
				))}
			</div>
			<button
				onClick={handleClickNext}
				className={`${
					gameOver ? 'animate-pulse' : ''
				} border-2 border-pink-300 shadow-lg py-1 px-3 mx-auto rounded hover:cursor-pointer hover:shadow-xl`}
				disabled={isLoadingNext || !isAnyClicked}
			>
				{gameOver ? 'Play again' : isLoadingNext ? 'Loading' : 'Next'}
			</button>
			<p className='p-3 text-center'>
				You have <span className='font-bold'>{score}</span>{' '}
				{score === 1 ? 'point' : 'points'}.
			</p>
			<p className='p-3 text-center'>
				<span className='font-bold'>{time}</span>{' '}
				{time === 1 ? 'second' : 'seconds'} remaining.
			</p>
			{gameOver && <p className='p-3 text-center'>Game Over!</p>}
		</div>
	);
};

export default PokemonList;
