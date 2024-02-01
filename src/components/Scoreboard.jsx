/* eslint-disable react/prop-types */
import ScoreboardCard from './ScoreboardCard';

const Scoreboard = ({ data, isLoading, isError, refetch }) => {
	if (isLoading) {
		return (
			<p className='text-center p-3 animate-pulse'>
				...loading Pokéhall of Fame...
			</p>
		);
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
		<div>
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
