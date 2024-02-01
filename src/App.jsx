import Footer from './components/Footer';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import Scoreboard from './components/Scoreboard';
import { useState } from 'react';

function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [gameOver, setGameOver] = useState(false);

	return (
		<div className='bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-400 h-screen font-mono text-neutral-950 flex flex-col gap-3 items-center justify-between pt-20'>
			<div>
				<Header gameStarted={gameStarted} gameOver={gameOver} />
				<PokemonList
					gameStarted={gameStarted}
					setGameStarted={setGameStarted}
					gameOver={gameOver}
					setGameOver={setGameOver}
				/>
				{!gameStarted && <Scoreboard />}
			</div>
			{!gameStarted && !gameOver && <Footer />}
		</div>
	);
}

export default App;
