import { motion } from 'framer-motion';
import { useState } from 'react';
import Tick from './Tick';
import Cross from './Cross';

/* eslint-disable react/prop-types */
const PokemonCard = ({
	// name,
	ability,
	move,
	url,
	isCorrect,
	refetchFunc,
	setRandomIndex,
	setIsAnyClicked,
	isAnyClicked,
	score,
	setScore,
	gameStarted,
	index,
	endGame,
	getPokemon,
	setIsWrong,
}) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleGuess = () => {
		if (!isAnyClicked && gameStarted) {
			setIsClicked(true);
			setIsAnyClicked(true);

			setTimeout(() => {
				getPokemon(refetchFunc, setRandomIndex, setIsAnyClicked);
			}, 1000);

			if (isCorrect) {
				setScore(score + 1);
			} else {
				setIsWrong(true);
				setTimeout(() => {
					endGame();
				}, 1000);
			}
		}
	};

	const delay = index * 0.1;

	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{
				type: 'tween',
				stiffness: 260,
				damping: 20,
				delay: delay,
			}}
			whileTap={{
				scale: 0.9,
			}}
			onClick={handleGuess}
			className={`relative border-2 rounded w-28 h-28 shadow-lg hover:cursor-pointer hover:shadow-xl ${
				!isClicked
					? 'border-neutral-950'
					: isCorrect
					? 'border-green-500 border-4'
					: 'border-red-500 border-4'
			}`}
		>
			<img
				src={url}
				alt={`Pokémon: ${index + 1} Ability 1: ${ability} Move 1: ${move}`}
				className='w-full h-full p-3'
			/>
			<div className='absolute bottom-1 right-1 text-sm'>
				{isClicked ? isCorrect ? <Tick /> : <Cross /> : ''}
			</div>
			<div className='absolute top-0 right-1 text-xs'>{ability}</div>
			<div className='absolute bottom-0 left-1 text-xs'>{move}</div>
		</motion.div>
	);
};

export default PokemonCard;
