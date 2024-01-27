import axios from 'axios';
import PokemonCard from './PokemonCard';
import { useQuery } from '@tanstack/react-query';
import Question from './Question';

const getRandomIds = () => {
	const randomIds = [];

	while (randomIds.length < 3) {
		const randomNum = Math.floor(Math.random() * 1302) + 1;

		if (!randomIds.includes(randomNum)) {
			randomIds.push(randomNum);
		}
	}
	return randomIds;
};

const fetchPokemon = async () => {
	const randomIds = getRandomIds();
	const responses = await Promise.all(
		randomIds.map((id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
	);
	return responses.map((response) => response.data);
};

const getRandomIndex = () => {
	const random = Math.floor(Math.random() * 3);
	return random;
};

const PokemonList = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { data, isLoading, isError } = useQuery({
		queryKey: ['pokemon'],
		queryFn: fetchPokemon,
	});

	const randomIndex = getRandomIndex();
	const randomPokemon = data && data.length > 0 ? data[randomIndex] : null;

	if (isLoading) {
		return <div className='text-center p-3 border'>Loading...</div>;
	}

	if (isError) {
		return <div className='text-center p-3 border'>Error fetching data</div>;
	}

	return (
		<div>
			{randomPokemon && <Question name={randomPokemon.name} />}
			<div className='border flex flex-wrap justify-center gap-3'>
				{data?.map((query, index) => (
					<PokemonCard
						key={query.id}
						name={query.name}
						url={query.sprites.front_default}
						isCorrect={index === randomIndex}
					/>
				))}
			</div>
		</div>
	);
};

export default PokemonList;
