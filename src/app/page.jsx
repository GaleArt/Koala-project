
export default async function Home() {

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-12 container mx-auto'>
			<div className='z-10 max-w-8xl w-full items-start justify-around font-mono text-sm lg:flex'>
				<div className='flex flex-col w-full border-b border-gray-300 bg-gradient-to-b m-2 pb-3 pt-3 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
					<h2 className='flex font-mono font-bold text-lg justify-center'>
						Дневная смена
					</h2>

					<div class='inline-flex items-center'>
						<label
							class='relative flex items-center p-3 rounded-full cursor-pointer'
							htmlFor='check'
						>
							<input
								type='checkbox'
								class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
								id='check'
							/>
							<span class='absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-3.5 w-3.5'
									viewBox='0 0 20 20'
									fill='currentColor'
									stroke='currentColor'
									stroke-width='1'
								>
									<path
										fill-rule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clip-rule='evenodd'
									></path>
								</svg>
							</span>
						</label>
						<label
							class='mt-px font-light cursor-pointer select-none'
							htmlFor='check'
						>
							Приемка смены (ТОРЭКС, ВМ, ПВР)
						</label>
					</div>

					<div class='inline-flex items-center'>
						<label
							class='relative flex items-center p-3 -mt-5 rounded-full cursor-pointer'
							htmlFor='description'
						>
							<input
								type='checkbox'
								class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
								id='description'
							/>
							<span class='absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-3.5 w-3.5'
									viewBox='0 0 20 20'
									fill='currentColor'
									stroke='currentColor'
									stroke-width='1'
								>
									<path
										fill-rule='evenodd'
										d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
										clip-rule='evenodd'
									></path>
								</svg>
							</span>
						</label>
						<label
							class='mt-px font-light cursor-pointer select-none'
							htmlFor='description'
						>
							<div>
								<p class='block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>
									Обход рабочих мест по НДС
								</p>
								<p class='block font-sans text-sm antialiased font-normal leading-normal text-gray-700'>
									(2 РМ минимум, все РМ в выходной день)
								</p>
							</div>
						</label>
					</div>

					<p>Ознакомления в ТОРЭКС (ОЖ, СЗ, журналы)</p>
					<p>
						Обход РМ НДС{' '}
						<code className='text-xs'>(2 РМ минимум, все РМ в выходной)</code>
					</p>
					<p>Допуски по НДС</p>
					<p>
						ИС КСОТ <a href='#'>(записать)</a>
					</p>
					<p>ИС КСОТ контроль журналов "Г364", "НЭЦ"</p>
					<p>
						<a href='#'>Журнал ИРП</a> (во время ППР)
					</p>
					<p>Внеплановые (очередные) инструктажи, файл</p>
					<p>Рапорт день (для ЗГИэто)</p>
					<p>Контроль СИЗ смены</p>
					<p>Контроль такелажных средств смены</p>
				</div>

				<div className='flex flex-col w-full border-b border-gray-300 bg-gradient-to-b m-2 pb-3 pt-3 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
					<h2 className='flex font-mono font-bold text-lg justify-center'>
						Вечерняя смена
					</h2>
					<p>Приемка смены (ТОРЭКС, ВМ, камеры, ПВР)</p>
					<p>Ознакомления в ТОРЭКС (ОЖ, СЗ, журналы)</p>
					<p>
						Обход РМ НДС <code className='text-xs'>(Все рабочие места!)</code>
					</p>
					<p>sdfsdf</p>
					<p>sdfgfdsg</p>
					<p>fgbfgb</p>
					<p>tregrt</p>
				</div>

				<div className='flex flex-col w-full border-b border-gray-300 bg-gradient-to-b m-2 pb-3 pt-3 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
					<h2 className='flex font-mono font-bold text-lg justify-center'>
						Ночная смена
					</h2>
					<p>Приемка смены (ТОРЭКС, ВМ, камеры, ПВР)</p>
					<p>Ознакомления в ТОРЭКС (ОЖ, СЗ, журналы)</p>
					<p>
						Обход РМ НДС <code className='text-xs'>(Все рабочие места!)</code>
					</p>
					<p>sdfsdf</p>
					<p>sdfgfdsg</p>
					<p>fgbfgb</p>
					<p>tregrt</p>
				</div>
			</div>
		</main>
	);
}
