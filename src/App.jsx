import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokemonList from './components/pokemonList';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<div className='border'>
				<h1 className='p-3 text-center text-3xl font-bold underline'>
					Pokemon Quiz
				</h1>
			</div>
			<QueryClientProvider client={queryClient}>
				<PokemonList />
			</QueryClientProvider>
		</>
	);
}

export default App;
