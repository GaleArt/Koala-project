import InstrumentCard from '@/components/InstrumentCard';
import InstrumentSearch from '@/components/InstrumentSearch';
import { prisma } from '@/libs/prisma';

async function loadInstruments() {
	return await prisma().instruments.findMany();
}

export const metadata = {
	title: 'СИЗ и ТСБ',
};

export default async function Instrument() {
	const instruments = await loadInstruments();

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-3 container mx-auto'>
			<div className='flex flex-col z-10 w-full items-center font-mono text-sm lg:flex'>
				<InstrumentSearch />
				<div className='flex items-start w-full px-2 m-1 py-0.5 font-bold child:text-left bg-gray-300 rounded-lg'>
					<div className='w-1/12'>№ Смены</div>
					<div className='w-2/12'>Наименование</div>
					<div className='w-3/12'>Описание</div>
					<div className='w-2/12'>Тип</div>
					<div className='w-2/12'>Дата исп.</div>
					<div className='w-1/12'>Дата след. исп.</div>
					<div className='w-1/12'></div>
				</div>
				{instruments.map((instrument) => (
					<InstrumentCard key={instrument.id} instrument={instrument} />
				))}
			</div>
		</main>
	);
}
