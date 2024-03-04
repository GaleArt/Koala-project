/* import { prisma } from '@/libs/prisma';

async function loadTasks() {
	return await prisma().task.findMany();
} */

export default async function Calc() {

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-12 container mx-auto'>
			<div className='z-10 max-w-6xl w-full items-start justify-around font-mono text-sm lg:flex'>
				<div className='flex flex-col w-full border-b border-gray-300 bg-gradient-to-b m-2 p-8 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-8 lg:dark:bg-zinc-800/30'>
					<h2 className='flex font-mono font-bold text-lg justify-center'>
						Калькулятор расчета R изоляции
					</h2>

					<div class='relative h-11 w-full min-w-[200px] mt-5'>
						<input
							type='number'
							placeholder='Введи ало'
							class='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
						/>
						<label class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							Rиз на "+"
						</label>
					</div>

					<div class='relative h-11 w-full min-w-[200px] mt-5'>
						<input
							placeholder='Static'
							class='peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
						/>
						<label class="after:content[' '] pointer-events-none absolute left-0  -top-2.5 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
							Static
						</label>
					</div>
				</div>

				<div className='flex flex-col w-full border-b border-gray-300 bg-gradient-to-b m-2 pb-3 pt-3 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
					<h2 className='flex font-mono font-bold text-lg justify-center'>
						Калькулятор суточной утечки
					</h2>
					<p>Приемка смены (ТОРЭКС, ВМ, камеры, ПВР)</p>
				</div>
			</div>
		</main>
	);
}
