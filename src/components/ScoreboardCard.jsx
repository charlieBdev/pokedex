/* eslint-disable react/prop-types */
const ScoreboardCard = ({ name, score }) => {
	return (
		<div className='flex gap-3 justify-between'>
			<p>{name}</p>
			<p>
				{score} {score == 1 ? 'pt' : 'pts'}
			</p>
		</div>
	);
};

export default ScoreboardCard;
