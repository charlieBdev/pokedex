import axios from 'axios';
import PokemonCard from './PokemonCard';
import { useQuery } from '@tanstack/react-query';

const fetchAllPokemon = async () => {
	const response = await axios.get(
		'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'
	);
	return response.data.results;
};

const pokemonList = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const query = useQuery({
		queryKey: ['allPokemon'],
		queryFn: fetchAllPokemon,
	});

	return (
		<div>
			<h1>Pokemon List</h1>
			<div className='flex flex-wrap'>
				{query.data?.map((pokemon) => (
					<PokemonCard
						key={pokemon.name}
						name={pokemon.name}
						url={pokemon.url}
					/>
				))}
			</div>
		</div>
	);
};

export default pokemonList;
