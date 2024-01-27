// eslint-disable-next-line react/prop-types
const Question = ({ name }) => {
	// eslint-disable-next-line react/prop-types
	const upperName = name[0].toUpperCase() + name.slice(1);

	return (
		<div className='p-3 border'>
			<h2 className='text-center'>
				Which Pokemon is <span className='font-bold'>{upperName}</span>?
			</h2>
		</div>
	);
};

export default Question;
