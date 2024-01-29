import PokemonList from './components/pokemonList';

function App() {
	return (
		<div className='bg-yellow-100 h-screen font-mono'>
			<div>
				<h1 className='p-3 text-center text-3xl font-bold'>Pokemon Quiz</h1>
			</div>
			<PokemonList />
		</div>
	);
}

export default App;
