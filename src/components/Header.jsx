import Pokeball from './Pokeball';

const Header = () => {
	return (
		<div className='flex justify-center items-center'>
			<Pokeball />
			<h1 className='tracking-wide p-3 text-center text-3xl font-bold'>
				Pokemon Quiz
			</h1>
			<Pokeball />
		</div>
	);
};

export default Header;
