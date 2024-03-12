const RizInputForm = (props) => {
	const {
		voltageFull,
		setVoltageFull,
		resistPr,
		setResistPr,
		voltagePlus,
		setVoltagePlus,
		voltageMinus,
		setVoltageMinus,
	} = props;

	return (
		<div>
			<label
				htmlFor='initial data'
				className='block font-serif text-sm font-light leading-6 text-gray-600'
			>
				Измеренные параметры
			</label>

			<div className='relative mt-2 rounded-md shadow-sm'>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1'>
					<span className='font-serif text-gray-500 sm:text-sm'>U общ.</span>
				</div>

				<input
					type='number'
					name='voltageFull'
					id='voltageFull'
					className='block w-full rounded-md border-0 py-1.5 pl-14 pr-2 font-serif text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6'
					placeholder='0.00'
					value={voltageFull}
					onChange={(e) => setVoltageFull(e.target.value)}
				/>
			</div>

			<div className='relative mt-2 rounded-md shadow-sm'>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1'>
					<span className='font-serif text-gray-500 sm:text-sm'>R пр.</span>
				</div>

				<input
					type='number'
					name='resistPr'
					id='resistPr'
					className='block w-full rounded-md border-0 py-1.5 pl-14 pr-2 font-serif text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6'
					placeholder='0.00'
					value={resistPr}
					onChange={(e) => setResistPr(e.target.value)}
				/>
			</div>

			<div className='relative mt-2 rounded-md shadow-sm'>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1'>
					<span className='font-serif text-gray-500 sm:text-sm'>U+</span>
				</div>

				<input
					type='number'
					name='voltagePlus'
					id='voltagePlus'
					className='block w-full rounded-md border-0 py-1.5 pl-14 pr-2 font-serif text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6'
					placeholder='0.00'
					value={voltagePlus}
					onChange={(e) => setVoltagePlus(e.target.value)}
				/>
			</div>

			<div className='relative mt-2 rounded-md shadow-sm'>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1'>
					<span className='font-serif text-gray-500 sm:text-sm'>U-</span>
				</div>

				<input
					type='number'
					name='voltageMinus'
					id='voltageMinus'
					className='block w-full rounded-md border-0 py-1.5 pl-14 pr-2 font-serif text-gray-900 outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6'
					placeholder='0.00'
					value={voltageMinus}
					onChange={(e) => setVoltageMinus(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default RizInputForm;
