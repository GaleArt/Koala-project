'use client';

import { useState, useEffect } from 'react';

import RizInputForm from './RizInputForm';

const RizCalc = () => {
	const [voltageFull, setVoltageFull] = useState(0);
	const [resistPr, setResistPr] = useState(0);
	const [voltagePlus, setVoltagePlus] = useState(0);
	const [voltageMinus, setVoltageMinus] = useState(0);

	const [totalAll, setTotalAll] = useState(0);
	const [totalPlus, setTotalPlus] = useState(0);
	const [totalMinus, setTotalMinus] = useState(0);

	const handleResetTip = (e) => {
		e.preventDefault();
		setVoltageFull(0);
		setResistPr(0);
		setVoltagePlus(0);
		setVoltageMinus(0);
		setTotalAll(0);
		setTotalPlus(0);
		setTotalMinus(0);
	};

	useEffect(() => {
		if (voltageFull && resistPr && voltagePlus && voltageMinus) {
			const rObs =
				Number(voltageFull) / (Number(voltagePlus) + Number(voltageMinus));
			const rPlus =
				(Number(voltageFull) - Number(voltagePlus)) / Number(voltageMinus);
			const rMinus =
				(Number(voltageFull) - Number(voltageMinus)) / Number(voltagePlus);

			setTotalAll((rObs - 1) * Number(resistPr));
			setTotalPlus((rPlus - 1) * Number(resistPr));
			setTotalMinus((rMinus - 1) * Number(resistPr));
		}
	}, [voltageFull, resistPr, voltagePlus, voltageMinus]);

	return (
		<form className='mx-auto grid max-w-6xl gap-y-5 lg:gap-x-8'>
			<div className='flex flex-col gap-y-8 py-5 lg:px-5 lg:py-6'>
				<RizInputForm
					voltageFull={voltageFull}
					setVoltageFull={setVoltageFull}
					resistPr={resistPr}
					setResistPr={setResistPr}
					voltagePlus={voltagePlus}
					setVoltagePlus={setVoltagePlus}
					voltageMinus={voltageMinus}
					setVoltageMinus={setVoltageMinus}
				/>

				<p>Rиз общая = {totalAll.toFixed(2)} кОм</p>
				<p>Rиз на плюсе = {totalPlus.toFixed(2)} кОм</p>
				<p>Rиз минусе = {totalMinus.toFixed(2)} кОм</p>
				<button
					type='submit'
					className='mt-14 w-full rounded-md bg-cyan-200 px-3.5 py-2.5 text-lg font-semibold uppercase tracking-wide text-cyan-700 shadow-sm hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
					onClick={(e) => handleResetTip()}
				>
					Перезагрузить
				</button>
			</div>
		</form>
	);
};

export default RizCalc;
