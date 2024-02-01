/* eslint-disable react/prop-types */
import Pokeball from './Pokeball';

const Header = ({ gameStarted, gameOver }) => {
	return (
		<header className='flex flex-col justify-center items-center'>
			<div className='flex items-center'>
				<Pokeball />
				<h1 className='tracking-wide p-3 text-center text-3xl font-bold'>
					Pokéquiz
				</h1>
				<Pokeball />
			</div>
			{!gameStarted && !gameOver && (
				<p className='text-center p-3'>Test your Pokéknowledge</p>
			)}
			{/* {gameOver && <p className='text-center p-3'>Thanks for playing!</p>} */}
		</header>
	);
};

export default Header;
