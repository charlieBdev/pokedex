// import Form from './components/Form';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import Scoreboard from './components/Scoreboard';
import { useState } from 'react';

function App() {
	const [gameStarted, setGameStarted] = useState(false);

	return (
		<div className='bg-gradient-to-br from-[#FFDE00] via-[#ffdd00ab] to-[#FFDE00] h-screen font-mono text-neutral-950 flex flex-col gap-3 items-center pt-24'>
			<Header />
			<PokemonList gameStarted={gameStarted} setGameStarted={setGameStarted} />
			{/* <Form score={9999} /> */}
			{!gameStarted && <Scoreboard />}
		</div>
	);
}

export default App;
