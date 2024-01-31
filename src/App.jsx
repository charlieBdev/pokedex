import Footer from './components/Footer';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import Scoreboard from './components/Scoreboard';
import { useState } from 'react';

function App() {
	const [gameStarted, setGameStarted] = useState(false);

	return (
		<div className='bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-400 h-screen font-mono text-neutral-950 flex flex-col gap-3 items-center justify-between pt-24'>
			<div>
				<Header />
				<PokemonList
					gameStarted={gameStarted}
					setGameStarted={setGameStarted}
				/>
				{!gameStarted && <Scoreboard />}
			</div>
			<Footer />
		</div>
	);
}

export default App;
