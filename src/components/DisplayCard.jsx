const DisplayCard = (props) => {
	const {
		totalAll,
		setTotalAll,
		totalPlus,
		setTotalPlus,
		totalMinus,
		setTotalMinus,
		reset,
	} = props;

	

	return (
		<div className='flex flex-col justify-between rounded-xl bg-cyan-700 p-5 lg:py-10'>
			<div className='flex flex-col gap-y-8'>
				{data.map((item, i) => (
					<div key={i} className='flex items-end justify-between'>
						<div>
							<p className='font-serif text-white lg:text-lg'>{item.label}</p>
						</div>
						<div className='flex items-baseline gap-x-2'>
							<span className='text-xl font-extralight text-white lg:text-xl'>
								$
							</span>
							<span className='font-serif text-3xl font-medium text-white lg:text-4xl'>
								{item.value}
							</span>
						</div>
					</div>
				))}
			</div>

			<button
				type='submit'
				className='mt-14 w-full rounded-md bg-cyan-200 px-3.5 py-2.5 text-lg font-semibold uppercase tracking-wide text-cyan-700 shadow-sm hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
				onClick={(e) => reset(e)}
			>
				Перезагрузить
			</button>
		</div>
	);
};

export default DisplayCard;
