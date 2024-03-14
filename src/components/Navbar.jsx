import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className=''>
			<div className='container mx-auto flex justify-between items-center py-4'>
				<Link href='/'>
					<Image
						src='/koala.svg'
						alt='Logo'
						className='dark:invert'
						width={64}
						height={64}
						priority
					/>
				</Link>

				<div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
					<Link
						href='/calc'
						className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							Калькуляторы{' '}
							<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Посчитать Rиз или суточную утечку.
						</p>
					</Link>

					<Link
						href='/instrument'
						className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
					>
						<h2 className={`mb-3 text-2xl font-semibold`}>
							СИЗ, ТСБ и др.{' '}
							<span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
								-&gt;
							</span>
						</h2>
						<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
							Учет СИЗ, инструмента, ТСБ по сменам.
						</p>
					</Link>
				</div>

				{/* 				<ul className='flex gap-3 text-lg font-bold'>
					<li>
						<Link href='/' className='text-slate-400 hover:text-slate-100'>
							Tasks
						</Link>
					</li>
					<li>
						<Link href='/siz' className='text-slate-400 hover:text-slate-100'>
							New task
						</Link>
					</li>
				</ul> */}
			</div>
		</nav>
	);
};

export default Navbar;
