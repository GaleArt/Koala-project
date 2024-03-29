'use client';
import { useRouter } from 'next/navigation';

const InstrumentCard = ({ instrument }) => {
	const router = useRouter();
	return (
		<div className='flex items-start w-full px-2 py-0.5 hover:bg-cyan-400 hover:cursor-pointer child:text-left rounded-lg even:bg-gray-300'>
			<div className='w-1/12'>{instrument.smena}</div>
			<div className='w-2/12'>{instrument.name}</div>
			<div className='w-3/12'>{instrument.description}</div>
			<div className='w-2/12'>{instrument.type}</div>
			<div className='w-2/12'>{instrument.testedDate}</div>
			<div className='w-1/12'>{instrument.nextTestDate}</div>
			<div className='w-1/12'>
				<button
					class='text-slate-800 bg-white hover:bg-lime-400 border border-slate-800 rounded-lg font-medium mr-1 px-1 py-1 inline-flex space-x-1 items-center'
					onClick={() => router.push(`/instrument/${instruments.id}`)}
				>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-4 h-4'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
							/>
						</svg>
					</span>
				</button>
				<button class='text-slate-800 bg-white hover:bg-red-400 border border-slate-800 rounded-lg font-medium px-1 py-1 inline-flex space-x-1 items-center'>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-4 h-4'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
							/>
						</svg>
					</span>
				</button>
			</div>
		</div>
	);
};

export default InstrumentCard;
