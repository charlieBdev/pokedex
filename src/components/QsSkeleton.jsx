/* eslint-disable react/prop-types */
const QsSkeleton = ({ score }) => {
	return (
		<>
			<div className='flex flex-col gap-3'>
				<p className='text-center animate-pulse p-3'>Which Pokémon is ... ?</p>
				<div className='grid grid-cols-3 place-items-center gap-3'>
					<div className='rounded w-28 h-28 lg:h-40 lg:w-40 shadow-lg grid place-items-center animate-pulse bg-neutral-950 text-yellow-200 text-3xl font-bold'>
						?
					</div>
					<div className='rounded w-28 h-28 lg:h-40 lg:w-40 shadow-lg grid place-items-center animate-pulse bg-neutral-950 text-yellow-200 text-3xl font-bold'>
						?
					</div>
					<div className='rounded w-28 h-28 lg:h-40 lg:w-40 shadow-lg grid place-items-center animate-pulse bg-neutral-950 text-yellow-200 text-3xl font-bold'>
						?
					</div>
				</div>
				<p className='p-3 text-center animate-pulse'>
					You have
					<span className='font-bold'> {score} </span>
					{score === 1 ? 'point' : 'points'}
				</p>
			</div>
		</>
	);
};

export default QsSkeleton;
