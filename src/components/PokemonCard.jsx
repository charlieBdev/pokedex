import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const PokemonCard = ({ name, url, isCorrect }) => {
	// eslint-disable-next-line react/prop-types
	const upperName = name[0].toUpperCase() + name.slice(1);

	const [clicked, setClicked] = useState(false);

	const handleClick = () => {
		setClicked(true);
	};

	return (
		<div
			className={`border-4 ${
				clicked ? (isCorrect ? 'border-green-400' : 'border-red-400') : ''
			} rounded w-1/4 hover:cursor-pointer hover:shadow`}
			onClick={handleClick}
		>
			<img src={url} alt={name} />
			<h2 className='text-center hidden'>{upperName}</h2>
		</div>
	);
};

export default PokemonCard;
