import PokemonCard from './PokemonCard';
import { useQuery } from '@tanstack/react-query';
import Question from './Question';
import { useState } from 'react';
import { fetchPokemon, getRandomIndex } from '../utils';

// eslint-disable-next-line react/prop-types
const PokemonList = () => {
	const [isAnyClicked, setIsAnyClicked] = useState(false);
	const [correct, setCorrect] = useState(null);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	// eslint-disable-next-line react-hooks/rules-of-hooks
	let { data, isLoading, isError, refetch } = useQuery({
		queryKey: ['pokemon'],
		queryFn: fetchPokemon,
	});

	const [randomIndex, setRandomIndex] = useState(getRandomIndex());
	const randomPokemon = data?.[randomIndex].name;

	const handleClick = (e) => {
		e.preventDefault();
		data = [];
		refetch();
		setIsAnyClicked(false);
		setCorrect(null);
		const newIndex = getRandomIndex();
		setRandomIndex(newIndex);
		if (gameOver) {
			setScore(0);
			setGameOver(false);
		}
	};

	if (isLoading) {
		return (
			<div>
				<p className='text-center p-3'>Loading...</p>
				<div className='flex flex-wrap justify-center gap-3'>
					<div className='border-4 rounded w-1/4 h-full'>
						<div className='bg-neutral-500 h-full'></div>
					</div>
					<div className='border-4 rounded w-1/4 h-full'>
						<div className='bg-neutral-500 h-full'></div>
					</div>
					<div className='border-4 rounded w-1/4 h-full'>
						<div className='bg-neutral-500 h-full'></div>
					</div>
				</div>
			</div>
		);
	}

	if (isError) {
		return (
			<div className='text-center p-3'>
				<p>Error fetching data</p>
				<button
					className='border-2 rounded py-1 px-3'
					onClick={() => refetch()}
				>
					Refetch
				</button>
			</div>
		);
	}

	return (
		<div>
			{<Question name={randomPokemon} />}
			<div className='flex flex-wrap justify-center gap-3'>
				{!isLoading &&
					!isError &&
					data?.map((query, index) => (
						<PokemonCard
							key={query.id}
							name={query.name}
							url={query.sprites.front_default}
							isCorrect={index === randomIndex}
							isAnyClicked={isAnyClicked}
							setIsAnyClicked={setIsAnyClicked}
							setCorrect={setCorrect}
							score={score}
							setScore={setScore}
							setGameOver={setGameOver}
						/>
					))}
			</div>
			<div className='text-center p-3'>
				<p className='p-3 text-center'>
					{score} {score === 1 ? 'point' : 'points'}
				</p>
				{isLoading && <p className='text-center p-3'>Loading...</p>}
				{isAnyClicked ? (
					<>
						<p className='p-3'>{correct ? 'Correct!' : 'Incorrect!'}</p>
					</>
				) : null}
				<button
					className={`${
						isAnyClicked ? '' : 'text-neutral-500'
					} border-2 rounded py-1 px-3`}
					onClick={(e) => handleClick(e)}
					disabled={!isAnyClicked}
				>
					{gameOver ? 'Play again' : 'Next'}
				</button>
			</div>
			{gameOver && <p className='text-center p-3'>Game Over!</p>}
		</div>
	);
};

export default PokemonList;
