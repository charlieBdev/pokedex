// eslint-disable-next-line react/prop-types
const PokemonCard = ({ name, url }) => {
	// eslint-disable-next-line react/prop-types
	const urlArr = url.split('/');
	const id = urlArr[urlArr.length - 2];

	return (
		<div className='border rounded w-1/4'>
			<h2>{name}</h2>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
				alt={name}
			/>
		</div>
	);
};

export default PokemonCard;
