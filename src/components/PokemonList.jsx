/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PokemonCard from './PokemonCard';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchPokemon, getRandomIndex } from '../utils';
import Question from './Question';
import { motion } from 'framer-motion';
import Form from './Form';

const PokemonList = ({ gameStarted, setGameStarted }) => {
	const [randomIndex, setRandomIndex] = useState(getRandomIndex());
	const [isAnyClicked, setIsAnyClicked] = useState(false);
	const [isLoadingNext, setIsLoadingNext] = useState(false);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [time, setTime] = useState(60);

	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ['pokemon'],
		queryFn: fetchPokemon,
	});

	const handleClickStart = async () => {
		setScore(0);
		setTime(60);
		setGameStarted(true);
		countDown(60);

		setGameOver(false);
	};

	const handleClickNext = async () => {
		try {
			setIsLoadingNext(true);
			await refetch();
			setRandomIndex(getRandomIndex());
			setIsAnyClicked(false);
		} finally {
			setIsLoadingNext(false);
		}
	};

	const countDown = (timeLeft) => {
		let timer;
		clearInterval(timer);

		timer = setInterval(() => {
			if (timeLeft > 0) {
				timeLeft--;
				setTime(timeLeft);
			} else if (timeLeft === 0) {
				setGameOver(true);
				clearInterval(timer);
				endGame();
			}
		}, 1000);
	};

	const endGame = () => {
		setGameStarted(false);
	};

	if (isLoading) {
		return <p className='text-center p-3'>...loading...</p>;
	}

	if (isError) {
		return <p className='text-center p-3'>Error fetching Pokemon</p>;
	}

	return (
		<div className='flex flex-col gap-3'>
			{gameStarted && (
				<>
					<Question
						correctAnswer={data[randomIndex].name}
						gameStarted={gameStarted}
					/>
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
								gameOver={gameOver}
								setGameOver={setGameOver}
								countDown={countDown}
								gameStarted={gameStarted}
								index={index}
							/>
						))}
					</div>
				</>
			)}
			{!gameStarted ? (
				<motion.button
					whileTap={{
						scale: 0.9,
					}}
					onClick={handleClickStart}
					className='animate-pulse border-2 border-neutral-950 shadow-lg mx-auto w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl'
				>
					Start
				</motion.button>
			) : (
				<motion.button
					whileTap={{
						scale: 0.9,
					}}
					onClick={handleClickNext}
					className={`${
						gameOver ? 'animate-pulse' : ''
					} border-2 border-neutral-950 shadow-lg mx-auto w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl`}
					disabled={isLoadingNext || !isAnyClicked}
				>
					{gameOver ? 'Play again' : isLoadingNext ? 'Loading' : 'Next'}
				</motion.button>
			)}

			{gameStarted && (
				<>
					<p className='p-3 text-center'>
						You have <span className='font-bold'>{score}</span>{' '}
						{score === 1 ? 'point' : 'points'}
					</p>

					<p className='p-3 text-center'>
						<span className='font-bold'>{time}</span>{' '}
						{time === 1 ? 'second' : 'seconds'} remaining
					</p>
				</>
			)}
			{gameOver && (
				<>
					<p className='p-3 text-center'>Time is up.</p>

					<p className='p-3 text-center'>
						{' '}
						You scored {score} {score === 1 ? 'point' : 'points'}
					</p>
					<Form score={score} />
				</>
			)}
		</div>
	);
};

export default PokemonList;
