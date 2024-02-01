/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { handleClickStart } from '../utils';

const StartBtn = ({
	setGameStarted,
	refetchFunc,
	setRandomIndex,
	setIsAnyClicked,
}) => {
	return (
		<motion.button
			whileTap={{
				scale: 0.9,
			}}
			// needs refetch, setRandomIndex, setIsAnyClicked
			onClick={() =>
				handleClickStart(
					setGameStarted,
					refetchFunc,
					setRandomIndex,
					setIsAnyClicked
				)
			}
			className='animate-pulse border-2 border-neutral-950 shadow-lg mx-auto w-28 h-14 rounded hover:cursor-pointer hover:shadow-xl m-3'
		>
			Start
		</motion.button>
	);
};

export default StartBtn;
