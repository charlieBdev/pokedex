import { changeUsernames, getPlaceSuffix } from '../utils';

/* eslint-disable react/prop-types */
const ScoreboardCard = ({ index, name, score }) => {
	return (
		<div className='grid grid-cols-3 hover:animate-pulse'>
			<p className='w-1/2 text-right'>
				{index + 1}
				<sup>{getPlaceSuffix(index + 1)}</sup>
			</p>
			<p>{changeUsernames(name)}</p>
			<div className='grid grid-cols-2 gap-1'>
				<p className='text-right'>{score}</p>
				<p>
					<sub>{score == 1 ? 'pt' : 'pts'}</sub>
				</p>
			</div>
		</div>
	);
};

export default ScoreboardCard;
