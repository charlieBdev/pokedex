import axios from 'axios';
import { getRandomIds } from '../utils';

// PokeAPI
const fetchPokemon = async () => {
	const randomIds = getRandomIds();
	const responses = await Promise.all(
		randomIds.map((id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
	);
	return responses.map((response) => response.data);
};

// Scores API
const database = import.meta.env.VITE_API;
// const database = 'http://localhost:3000/scores';

// const dbPassword = import.meta.env.VITE_API_PW

const fetchScores = async () => {
	try {
		const response = await axios.get(database);
		return response.data;
	} catch (e) {
		console.error('Failed to fetch scores:', e.message);
		throw e;
	}
};

const postScore = async (formData) => {
	try {
		const response = await axios.post(database, formData);
		return response.data;
	} catch (e) {
		console.error('Failed to post score:', e.message);
		throw e;
	}
};

export { fetchPokemon, fetchScores, postScore };
