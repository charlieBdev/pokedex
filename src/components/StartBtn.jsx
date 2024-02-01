/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { handleClickStart } from '../utils';

const StartBtn = ({
	text,
	setGameOver,
	setGameStarted,
	setScore,
	refetchFunc,
	setRandomIndex,
	setIsAnyClicked,
}) => {
	return (
		<motion.button
			whileTap={{
				scale: 0.9,
			}}
			onClick={() => {
				setScore(0);
				handleClickStart(
					setGameOver,
					setGameStarted,
					refetchFunc,
					setRandomIndex,
					setIsAnyClicked
				);
			}}
			className='border-2 border-neutral-950 shadow-lg mx-auto w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl m-3'
		>
			{text}
		</motion.button>
	);
};

export default StartBtn;
