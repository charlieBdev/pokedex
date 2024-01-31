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
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [isWrong, setIsWrong] = useState(false);

	const { data, isLoading, isError, refetch, isFetching } = useQuery({
		queryKey: ['pokemon'],
		queryFn: fetchPokemon,
		enabled: false,
	});

	const handleClickStart = () => {
		setGameStarted(true);
		getPokemon();
	};

	const handleClickPlayAgain = () => {
		setScore(0);
		setGameStarted(true);
		setGameOver(false);
		setIsWrong(false);
	};

	const getPokemon = async () => {
		await refetch();
		setRandomIndex(getRandomIndex());
		setIsAnyClicked(false);
	};

	const endGame = () => {
		setGameOver(true);
		setGameStarted(false);
	};

	if (isLoading) {
		return <p className='text-center p-3'>Which Pokemon is ... ?</p>;
	}

	if (isError) {
		refetch();
		return <p className='text-center p-3'>...reloading Pokemon...</p>;
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
								ability={query.abilities[0].ability.name}
								move={query.moves[0].move.name}
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
								setIsWrong={setIsWrong}
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
					className='animate-pulse border-2 border-neutral-950 shadow-lg mx-auto w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl m-3'
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
					className={`${
						isFetching ? '' : 'animate-pulse'
					} border-2 border-neutral-950 shadow-lg mx-auto w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl m-3`}
					disabled={isFetching}
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
					{isFetching && (
						<p className='p-3 text-center animate-pulse'>...loading...</p>
					)}
					{isWrong && (
						<motion.p
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							className='p-3 text-center text-lg font-bold'
						>
							Game over!
						</motion.p>
					)}
				</>
			)}

			{/* final score and form */}
			{gameOver && (
				<>
					<p className='p-3 text-center'>
						You scored {score} {score === 1 ? 'point' : 'points'}
					</p>
					<Form score={score} />
				</>
			)}
		</div>
	);
};

export default PokemonList;
