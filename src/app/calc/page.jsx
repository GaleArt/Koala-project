import RizCalc from '@/components/RizCalc';
import H2Leak from '@/components/H2Leak';

export const metadata = {
	title: 'Калькуляторы',
};

export default async function Calc() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-12 container mx-auto'>
			<div className='z-10 max-w-6xl w-full items-start justify-around font-mono text-sm lg:flex'>
				<div className='flex flex-col w-full border-b border-gray-300 bg-gradient-to-b m-2 p-8 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-8 lg:dark:bg-zinc-800/30'>
					<h2 className='flex font-mono font-bold text-lg justify-center'>
						Калькулятор расчета R изоляции
					</h2>

					<RizCalc />
				</div>

				<div className='flex flex-col w-full border-b border-gray-300 bg-gradient-to-b m-2 pb-3 pt-3 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
					<h2 className='flex font-mono font-bold text-lg justify-center'>
						Калькулятор суточной утечки
					</h2>

					
				</div>
			</div>
		</main>
	);
}
