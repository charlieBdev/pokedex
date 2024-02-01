/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { getPokemon } from '../utils';
import Form from './Form';
import PokemonCard from './PokemonCard';
import Question from './Question';

const PokemonList = ({
	gameStarted,
	setGameStarted,
	gameOver,
	setGameOver,
	randomIndex,
	setRandomIndex,
	isAnyClicked,
	setIsAnyClicked,
	data,
	isLoading,
	isError,
	refetchFunc,
	isFetching,
}) => {
	const [score, setScore] = useState(0);
	const [isWrong, setIsWrong] = useState(false);

	const handleClickPlayAgain = () => {
		setScore(0);
		setGameStarted(true);
		setGameOver(false);
		setIsWrong(false);
	};

	const endGame = () => {
		setGameOver(true);
		setGameStarted(false);
	};

	if (isLoading) {
		return (
			<p className='text-center p-3 animate-pulse'>...loading Pokémon...</p>
		);
	}

	if (isError) {
		refetchFunc();
		return (
			<p className='text-center p-3 animate-pulse'>...reloading Pokémon...</p>
		);
	}

	return (
		<div className='flex flex-col gap-3'>
			{/* question and cards to choose - STAY */}
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
								refetchFunc={refetchFunc}
								setRandomIndex={setRandomIndex}
								setIsAnyClicked={setIsAnyClicked}
								isAnyClicked={isAnyClicked}
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

			{/* restart button - MOVE */}
			{gameOver && (
				<motion.button
					whileTap={{
						scale: 0.9,
					}}
					onClick={handleClickPlayAgain}
					className={`${
						isFetching ? 'animate-pulse' : ''
					} border-2 border-neutral-950 shadow-lg mx-auto w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl m-3`}
					disabled={isFetching}
				>
					{isFetching ? 'loading' : 'Restart'}
				</motion.button>
			)}

			{/* live score - STAY */}
			{gameStarted && (
				<>
					{!isFetching && !isWrong && (
						<p className='p-3 text-center'>
							You have
							<span className='font-bold'> {score} </span>
							{score === 1 ? 'point' : 'points'}
						</p>
					)}
					{isFetching && (
						<p className='p-3 text-center animate-pulse'>...loading...</p>
					)}
					{isWrong && (
						<motion.p
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							className='tracking-wide p-3 text-center text-lg font-bold'
						>
							GAME OVER
						</motion.p>
					)}
				</>
			)}

			{/* final score and form - NEEDS MOVING */}
			{gameOver && (
				<>
					<p className='p-3 text-center'>
						You scored <span className='font-bold'> {score} </span>{' '}
						{score === 1 ? 'point' : 'points'}
					</p>
					<Form score={score} />
				</>
			)}
		</div>
	);
};

export default PokemonList;
