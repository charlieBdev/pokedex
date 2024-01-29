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
	setGameOver = { setGameOver },
}) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = () => {
		if (!isAnyClicked) {
			setIsClicked(true);
			setIsAnyClicked(true);
			if (isCorrect) {
				setScore(score + 1);
			} else {
				setGameOver(true);
			}
		}
	};

	return (
		<div
			onClick={handleClick}
			className={`relative border-4 ${
				isClicked
					? isCorrect
						? 'border-green-400'
						: 'border-red-400'
					: 'border-pink-300'
			} rounded w-24 h-24 hover:cursor-pointer shadow-lg hover:shadow-xl`}
		>
			<img src={url} alt={name} className='w-full h-full' />
			<div className='absolute bottom-0 right-1 text-sm'>
				{isClicked ? (isCorrect ? 'Yes!' : 'No!!') : ''}
			</div>
		</div>
	);
};

export default PokemonCard;
