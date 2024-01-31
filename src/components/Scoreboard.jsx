/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import ScoreboardCard from './ScoreboardCard';
import { fetchScores } from '../utils';

const Scoreboard = () => {
	const { data, isLoading, isError, refetch } = useQuery({
		queryKey: ['scores'],
		queryFn: fetchScores,
	});

	if (isLoading) {
		return <p className='text-center p-3'>...loading High Scores...</p>;
	}

	if (isError) {
		refetch();
		return <p className='text-center p-3'>...reloading High Scores...</p>;
	}

	return (
		<div className='p-3'>
			<h3 className='underline text-center p-3'>High Scores</h3>
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
