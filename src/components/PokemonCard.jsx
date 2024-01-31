import { motion } from 'framer-motion';
import { useState } from 'react';

/* eslint-disable react/prop-types */
const PokemonCard = ({
	name,
	url,
	isCorrect,
	isAnyClicked,
	setIsAnyClicked,
	score,
	setScore,
	gameOver,
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
				getPokemon();
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
			className={`relative border-2 ${
				isClicked
					? isCorrect
						? 'border-green-500'
						: 'border-red-500'
					: 'border-neutral-950'
			} rounded w-28 h-28 hover:cursor-pointer shadow-lg hover:shadow-xl ${
				!isAnyClicked && !gameOver && gameStarted ? 'border-neutral-950' : ''
			}`}
		>
			<img src={url} alt={name} className='w-full h-full' />
			<div className='absolute bottom-0 right-1 text-sm'>
				{isClicked ? (isCorrect ? 'Yes!' : 'No!') : ''}
			</div>
		</motion.div>
	);
};

export default PokemonCard;
