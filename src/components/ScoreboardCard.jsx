/* eslint-disable react/prop-types */
const ScoreboardCard = ({ index, name, score }) => {
	return (
		<div className='grid grid-cols-3'>
			<p className='text-right w-28'>{index + 1}.</p>
			<p className='w-28'>{name}</p>
			<p className='w-28'>
				{score} {score == 1 ? 'pt' : 'pts'}
			</p>
		</div>
	);
};

export default ScoreboardCard;
