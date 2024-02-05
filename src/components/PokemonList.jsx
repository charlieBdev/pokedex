/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { getPokemon } from '../utils';
import PokemonCard from './PokemonCard';
import Question from './Question';
import QsSkeleton from './QsSkeleton';

const PokemonList = ({
	gameStarted,
	setGameStarted,
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
	score,
	setScore,
}) => {
	const [isWrong, setIsWrong] = useState(false);
	const queryClient = useQueryClient();

	const endGame = () => {
		setGameOver(true);
		setGameStarted(false);
		queryClient.resetQueries(['pokemon']);
	};

	// first load?
	if (isLoading) {
		return (
			// <p className='text-center p-3 animate-pulse'>
			<QsSkeleton score={score} />
			// </p>
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
			{!isFetching && (
				<Question
					correctAnswer={data[randomIndex].name}
					gameStarted={gameStarted}
				/>
			)}
			<div className='grid grid-cols-3 place-items-center gap-3'>
				{!isFetching &&
					data.map((query, index) => (
						<PokemonCard
							key={query.id}
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
							index={index}
							endGame={endGame}
							getPokemon={getPokemon}
							setIsWrong={setIsWrong}
						/>
					))}
			</div>

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

					{isWrong && (
						<motion.p
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							className='tracking-wide p-3 text-center font-bold'
						>
							GAME OVER
						</motion.p>
					)}
				</>
			)}
			{isFetching && (
				// <p className='p-3 text-center animate-pulse'>
				<QsSkeleton score={score} />
				// </p>
			)}
		</div>
	);
};

export default PokemonList;
