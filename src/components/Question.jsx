/* eslint-disable react/prop-types */
const Question = ({ correctAnswer }) => {
	// eslint-disable-next-line react/prop-types
	const upperName = correctAnswer[0].toUpperCase() + correctAnswer.slice(1);
	return (
		<div className='p-3'>
			<h2 className='text-center'>
				Which Pokemon is <span className='font-bold'>{upperName}</span>?
			</h2>
		</div>
	);
};

export default Question;
