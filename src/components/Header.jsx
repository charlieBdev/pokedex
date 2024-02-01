/* eslint-disable react/prop-types */
import Pokeball from './Pokeball';

const Header = ({ gameStarted, gameOver }) => {
	return (
		<header className='flex flex-col justify-center items-center'>
			<div className='flex items-center'>
				<Pokeball />
				<h1 className='tracking-wide p-3 text-center text-3xl font-bold'>
					Pokequiz
				</h1>
				<Pokeball />
			</div>
			{!gameStarted && !gameOver && (
				<p className='text-center p-3'>
					Welcome! Test your knowledge of Pokemon to the max by guessing which
					Pokemon you see.
				</p>
			)}
			{/* {gameOver && <p className='text-center p-3'>Thanks for playing!</p>} */}
		</header>
	);
};

export default Header;
