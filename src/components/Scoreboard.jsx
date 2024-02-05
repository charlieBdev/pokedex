/* eslint-disable react/prop-types */
import ScoreboardCard from './ScoreboardCard';
import ScoresSkeleton from './ScoresSkeleton';

const Scoreboard = ({ data, isLoading, isError, refetch }) => {
	if (isLoading) {
		return <ScoresSkeleton />;
	}

	if (isError) {
		refetch();
		return (
			<p className='text-center p-3 animate-pulse'>
				...reloading Pokéhall of Fame...
			</p>
		);
	}

	return (
		<div className='w-72 sm:w-80 mx-auto'>
			<h3 className='underline text-center p-3'>Pokéhall of Fame</h3>
			{data.length === 0 && (
				<p className=' text-center p-3'>Be the first to post a score!</p>
			)}
			<ul>
				{data.map((score, index) => (
					<ScoreboardCard
						key={score.id}
						index={index}
						name={score.playername}
						score={score.score}
					/>
				))}
			</ul>
		</div>
	);
};

export default Scoreboard;
