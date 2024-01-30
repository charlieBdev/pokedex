import Header from './components/Header';
import PokemonList from './components/PokemonList';

function App() {
	return (
		<div className='bg-gradient-to-br from-[#FFDE00] via-[#ffdd00ab] to-[#FFDE00] h-screen font-mono text-neutral-950 flex flex-col pt-32'>
			<Header />
			<PokemonList />
		</div>
	);
}

export default App;
