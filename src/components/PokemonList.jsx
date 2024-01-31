/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PokemonCard from './PokemonCard';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchPokemon, getRandomIndex } from '../utils';
import Question from './Question';
import { motion } from 'framer-motion';
import Form from './Form';

const PokemonList = ({ gameStarted, setGameStarted }) => {
	const queryClient = useQueryClient();
	const [randomIndex, setRandomIndex] = useState(getRandomIndex());
	const [isAnyClicked, setIsAnyClicked] = useState(false);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	console.log(gameStarted, '<<< gameStarted');
	console.log(gameOver, '<<< gameOver');

	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ['pokemon'],
		queryFn: fetchPokemon,
		enabled: false,
		// staleTime: 0,
	});

	const handleClickStart = () => {
		// setScore(0);
		setGameStarted(true);
		// setGameOver(false);
		getPokemon();
	};

	const handleClickPlayAgain = () => {
		// queryClient.invalidateQueries('pokemon');
		setScore(0);
		setGameStarted(true);
		setGameOver(false);
		// getPokemon();
	};

	const getPokemon = async () => {
		await refetch();
		setRandomIndex(getRandomIndex());
		setIsAnyClicked(false);
	};

	const endGame = () => {
		// queryClient.reset('pokemon');
		setGameOver(true);
		setGameStarted(false);
	};

	if (isLoading) {
		return <p className='text-center p-3'>...loading Pokemon...</p>;
	}

	if (isError) {
		return <p className='text-center p-3'>Error fetching Pokemon</p>;
	}

	return (
		<div className='flex flex-col gap-3'>
			{/* question and cards to choose */}
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
								gameStarted={gameStarted}
								index={index}
								endGame={endGame}
								getPokemon={getPokemon}
							/>
						))}
					</div>
				</>
			)}

			{/* start and play again button */}
			{!gameStarted && !gameOver && (
				<motion.button
					whileTap={{
						scale: 0.9,
					}}
					onClick={handleClickStart}
					className='animate-pulse border-2 border-neutral-950 shadow-lg mx-auto w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl'
				>
					Start
				</motion.button>
			)}

			{gameOver && (
				<motion.button
					whileTap={{
						scale: 0.9,
					}}
					onClick={handleClickPlayAgain}
					className='animate-pulse border-2 border-neutral-950 shadow-lg mx-auto w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl'
				>
					Play again
				</motion.button>
			)}

			{/* live score */}
			{gameStarted && (
				<>
					<p className='p-3 text-center'>
						You have <span className='font-bold'>{score}</span>{' '}
						{score === 1 ? 'point' : 'points'}
					</p>
				</>
			)}

			{/* final score and form */}
			{gameOver && (
				<>
					<p className='p-3 text-center'>Game Over!</p>

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
