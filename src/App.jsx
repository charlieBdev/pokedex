import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPokemon, fetchScores, getRandomIndex } from './utils';
import Footer from './components/Footer';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import Scoreboard from './components/Scoreboard';
import StartBtn from './components/StartBtn';
import Form from './components/Form';

function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [score, setScore] = useState(0);
	const [randomIndex, setRandomIndex] = useState(getRandomIndex());
	const [isAnyClicked, setIsAnyClicked] = useState(false);

	const { data, isLoading, isError, refetch, isFetching } = useQuery({
		queryKey: ['pokemon'],
		queryFn: fetchPokemon,
		enabled: false,
	});

	const {
		data: scoresData,
		isLoading: scoresIsLoading,
		isError: scoresIsError,
		refetch: scoresRefetch,
	} = useQuery({
		queryKey: ['scores'],
		queryFn: fetchScores,
	});

	return (
		<div className='bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-400 h-screen font-mono text-neutral-950 flex flex-col gap-3 items-center justify-between pt-20'>
			<div className='flex flex-col'>
				<Header gameStarted={gameStarted} gameOver={gameOver} />

				{/* Start button */}
				{!gameStarted && !gameOver && (
					<StartBtn
						text='Start'
						setGameOver={setGameOver}
						setGameStarted={setGameStarted}
						setScore={setScore}
						refetchFunc={refetch}
						setRandomIndex={setRandomIndex}
						setIsAnyClicked={setIsAnyClicked}
					/>
				)}

				{/* Restart button */}
				{gameOver && !gameStarted && (
					<StartBtn
						text='Restart'
						setGameOver={setGameOver}
						setGameStarted={setGameStarted}
						setScore={setScore}
						refetchFunc={refetch}
						setRandomIndex={setRandomIndex}
						setIsAnyClicked={setIsAnyClicked}
					/>
				)}

				{/* Game in play */}
				{gameStarted && (
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
						score={score}
						setScore={setScore}
					/>
				)}

				{/* Final screen */}
				{gameOver && (
					<>
						<p className='p-3 text-center'>
							You scored <span className='font-semibold'> {score} </span>{' '}
							{score === 1 ? 'point' : 'points'}
						</p>
						<Form
							score={score}
							data={scoresData}
							isLoading={scoresIsLoading}
							isError={scoresIsError}
							refetch={scoresRefetch}
						/>
					</>
				)}
				{!gameStarted && (
					<Scoreboard
						data={scoresData}
						isLoading={scoresIsLoading}
						isError={scoresIsError}
						refetch={scoresRefetch}
					/>
				)}
			</div>

			{!gameStarted && !gameOver && <Footer />}
		</div>
	);
}

export default App;
