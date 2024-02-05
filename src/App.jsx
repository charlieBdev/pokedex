import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRandomIndex } from './utils';
import {
	Footer,
	Form,
	Header,
	PokemonList,
	Scoreboard,
	StartBtn,
} from './components';
import { fetchPokemon, fetchScores } from './api';

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
		<div className='bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-400 min-h-screen font-mono text-neutral-950 flex flex-col justify-between'>
			<Header gameStarted={gameStarted} gameOver={gameOver} />
			<div className='flex flex-col items-center'>
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
							You scored <span className='font-bold'> {score} </span>{' '}
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
			</div>
			{!gameStarted && (
				<Scoreboard
					data={scoresData}
					isLoading={scoresIsLoading}
					isError={scoresIsError}
					refetch={scoresRefetch}
				/>
			)}
			<Footer />
		</div>
	);
}

export default App;
