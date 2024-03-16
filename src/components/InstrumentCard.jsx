'use client';
import { useRouter } from 'next/navigation';

const InstrumentCard = ({ instrument }) => {
	const router = useRouter();
	return (
		<div
			className='flex items-start w-full px-2 m-1 py-0.5 hover:bg-cyan-400 hover:cursor-pointer child:text-left rounded-lg'
			onClick={() => router.push(`/instrument/${instruments.id}`)}
		>
			<div className='w-1/12'>{instrument.smena}</div>
			<div className='w-2/12'>{instrument.name}</div>
			<div className='w-3/12'>{instrument.description}</div>
			<div className='w-2/12'>{instrument.type}</div>
			<div className='w-2/12'>{instrument.testedDate}</div>
			<div className='w-1/12'>{instrument.nextTestDate}</div>
			<div className='w-1/12'>ред+удал</div>
		</div>
	);
};

export default InstrumentCard;
