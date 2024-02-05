/* eslint-disable react/prop-types */

const CardSkelly = () => {
	return (
		<div className='rounded w-28 h-28 lg:h-40 lg:w-40 shadow-lg grid place-items-center animate-pulse bg-neutral-950 text-yellow-200 text-3xl font-bold'>
			?
		</div>
	);
};

const QsSkeleton = ({ score }) => {
	return (
		<>
			<div className='flex flex-col gap-3'>
				<p className='text-center p-3'>Which Pokémon is ...... ?</p>
				<div className='grid grid-cols-3 place-items-center gap-3'>
					<CardSkelly />
					<CardSkelly />
					<CardSkelly />
				</div>
				<p className='p-3 text-center'>
					You have
					<span className='font-bold'> {score} </span>
					{score === 1 ? 'point' : 'points'}
				</p>
			</div>
		</>
	);
};

export default QsSkeleton;
