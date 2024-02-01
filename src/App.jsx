import Footer from './components/Footer';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import Scoreboard from './components/Scoreboard';
import { useState } from 'react';
import StartBtn from './components/StartBtn';
import { fetchPokemon, getRandomIndex } from './utils';
import { useQuery } from '@tanstack/react-query';

function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [randomIndex, setRandomIndex] = useState(getRandomIndex());
	const [isAnyClicked, setIsAnyClicked] = useState(false);

	const { data, isLoading, isError, refetch, isFetching } = useQuery({
		queryKey: ['pokemon'],
		queryFn: fetchPokemon,
		enabled: false,
	});

	console.log(gameStarted, 'started');
	console.log(gameOver, 'over');

	return (
		<div className='bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-400 h-screen font-mono text-neutral-950 flex flex-col gap-3 items-center justify-between pt-20'>
			<div className='flex flex-col'>
				<Header gameStarted={gameStarted} gameOver={gameOver} />
				{!gameStarted && !gameOver && (
					<StartBtn
						refetchFunc={refetch}
						setGameStarted={setGameStarted}
						setRandomIndex={setRandomIndex}
						setIsAnyClicked={setIsAnyClicked}
					/>
				)}
				<PokemonList
					gameStarted={gameStarted}
					setGameStarted={setGameStarted}
					gameOver={gameOver}
					setGameOver={setGameOver}
					randomIndex={randomIndex}
					setRandomIndex={setRandomIndex}
					isAnyClicked={isAnyClicked}
					setIsAnyClicked={setIsAnyClicked}
					data={data}
					isLoading={isLoading}
					isError={isError}
					refetchFunc={refetch}
					isFetching={isFetching}
				/>
				{!gameStarted && <Scoreboard />}
			</div>
			{!gameStarted && !gameOver && <Footer />}
		</div>
	);
}

export default App;
