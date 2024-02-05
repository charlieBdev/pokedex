const ScoreRowSkelly = () => {
	return (
		<div className='grid grid-cols-3 hover:animate-pulse italic'>
			<p className='w-1/2 text-right'>
				1<sup>st</sup>
			</p>
			<p>Pikachu</p>
			<div className='grid grid-cols-2 gap-1'>
				<p className='text-right'>99</p>
				<p>
					<sub>pts</sub>
				</p>
			</div>
		</div>
	);
};

const ScoresSkeleton = () => {
	return (
		<div className='w-72 sm:w-80 mx-auto animate-pulse backdrop-blur-3xl'>
			<h3 className='underline text-center p-3'>Pokéhall of Fame</h3>
			<ScoreRowSkelly />
			<ScoreRowSkelly />
			<ScoreRowSkelly />
			<ScoreRowSkelly />
			<ScoreRowSkelly />
			<ScoreRowSkelly />
			<ScoreRowSkelly />
			<ScoreRowSkelly />
			<ScoreRowSkelly />
			<ScoreRowSkelly />
		</div>
	);
};

export default ScoresSkeleton;
