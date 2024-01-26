import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokemonList from './components/pokemonList';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<h1 className='text-3xl font-bold underline'>Pokemon App</h1>
			<QueryClientProvider client={queryClient}>
				<PokemonList />
			</QueryClientProvider>
		</>
	);
}

export default App;
