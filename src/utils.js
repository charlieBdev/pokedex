import axios from 'axios';

export const getRandomIndex = () => {
	// from 0-2
	const random = Math.floor(Math.random() * 3);
	return random;
};

export const getRandomIds = () => {
	// from 1 to 1302, an array of three
	const randomIds = [];

	while (randomIds.length < 3) {
		const randomNum = Math.floor(Math.random() * 1302) + 1;

		if (!randomIds.includes(randomNum)) {
			randomIds.push(randomNum);
		}
	}
	return randomIds;
};

export const fetchPokemon = async () => {
	const randomIds = getRandomIds();
	const responses = await Promise.all(
		randomIds.map((id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
	);
	return responses.map((response) => response.data);
};
