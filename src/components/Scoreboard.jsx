/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import ScoreboardCard from './ScoreboardCard';
import { fetchScores } from '../utils';

const Scoreboard = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['scores'],
		queryFn: fetchScores,
	});

	if (isLoading) {
		return <p className='text-center p-3'>...loading High Scores...</p>;
	}

	if (isError) {
		return <p className='text-center p-3'>Error fetching High Scores</p>;
	}

	return (
		<div className='p-3'>
			<h3 className='underline text-center'>High Scores</h3>
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
