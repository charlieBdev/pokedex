/* eslint-disable react/prop-types */
const Question = ({ correctAnswer, gameStarted }) => {
	const upperName = correctAnswer[0].toUpperCase() + correctAnswer.slice(1);
	return (
		<div className='p-3'>
			<h2 className='text-center'>
				Which Pokémon is{' '}
				<span className='font-bold'>{gameStarted ? upperName : '... '}</span>?
			</h2>
		</div>
	);
};

export default Question;
