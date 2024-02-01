import { changeUsernames, getPlaceSuffix } from '../utils';

/* eslint-disable react/prop-types */
const ScoreboardCard = ({ index, name, score }) => {
	return (
		<div className='grid grid-cols-3 w-96 mx-auto'>
			<p className='w-28 text-center'>
				{index + 1}
				<sup>{getPlaceSuffix(index + 1)}</sup>
			</p>
			<p className='w-28'>{changeUsernames(name)}</p>
			<p className='w-28'>
				{score} {score == 1 ? 'pt' : 'pts'}
			</p>
		</div>
	);
};

export default ScoreboardCard;
