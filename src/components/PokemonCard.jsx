import { useState } from 'react';

const PokemonCard = ({
	// eslint-disable-next-line react/prop-types
	name,
	// eslint-disable-next-line react/prop-types
	url,
	// eslint-disable-next-line react/prop-types
	isCorrect,
	// eslint-disable-next-line react/prop-types
	isAnyClicked,
	// eslint-disable-next-line react/prop-types
	setIsAnyClicked,
	// eslint-disable-next-line react/prop-types
	setCorrect,
	// eslint-disable-next-line react/prop-types
	score,
	// eslint-disable-next-line react/prop-types
	setScore,
	// eslint-disable-next-line react/prop-types
	setGameOver,
}) => {
	// eslint-disable-next-line react/prop-types
	const upperName = name[0].toUpperCase() + name.slice(1);

	const [clicked, setClicked] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		if (!isAnyClicked) {
			setIsAnyClicked(true);
			setClicked(true);
			setCorrect(isCorrect);
			if (isCorrect) {
				setScore(score + 1);
			} else {
				setGameOver(true);
			}
		}
	};

	return (
		<div
			className={`border-4 ${
				clicked ? (isCorrect ? 'border-green-400' : 'border-red-400') : ''
			} rounded w-1/4 hover:cursor-pointer hover:shadow`}
			onClick={(e) => handleClick(e)}
		>
			<img src={url} alt={name} className='object-cover w-full h-full' />
			<h2 className='text-center hidden'>{upperName}</h2>
		</div>
	);
};

export default PokemonCard;
