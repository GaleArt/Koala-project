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

	const handleResetTip = () => {
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
			/*	Небольшая проверка вывода (изоляция все-таки физическая величина)	*/
			(rObs - 1) * Number(resistPr) < 0
				? setTotalAll(0)
				: setTotalAll((rObs - 1) * Number(resistPr));

			(rPlus - 1) * Number(resistPr) < 0
				? setTotalPlus(0)
				: setTotalPlus((rPlus - 1) * Number(resistPr));

			(rMinus - 1) * Number(resistPr) < 0
				? setTotalMinus(0)
				: setTotalMinus((rMinus - 1) * Number(resistPr));
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
			</div>
		</form>
	);
};

export default RizCalc;
