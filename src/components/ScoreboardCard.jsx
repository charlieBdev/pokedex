/* eslint-disable react/prop-types */
const ScoreboardCard = ({ index, name, score }) => {
	return (
		<div className='grid grid-cols-2'>
			<p className='w-28'>{index + 1}. {name}</p>
			<p className='w-28'>
				{score} {score == 1 ? 'pt' : 'pts'}
			</p>
		</div>
	);
};

export default ScoreboardCard;
