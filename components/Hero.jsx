import React from 'react';
import { useState } from 'react';

const Hero = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className='flex flex-col relative left-0'>
			<h1
				className='text-3xl md:text-4xl z-10 '
				data-aos='fade-down'
				data-aos-duration='1000'
				data-aos-delay='1000'
			>
				Hi, Im Bjørn-Magnus Svendsen Fromreide. Welcome to my portfolio.
			</h1>
			<p
				className='w-2/3 py-6'
				data-aos='fade-down'
				data-aos-duration='1000'
				data-aos-delay='1600'
			>
				Im a frontend developer from Oslo. I like to make websites and
				applications for clients and for fun.
			</p>

			<button
				onClick={() => setShowModal(true)}
				data-aos='fade-down'
				data-aos-duration='1000'
				data-aos-delay='2000'
				class='bg-button text-primary w-48 transition-all relative inline-flex items-center justify-center  overflow-hidden tracking-tighter dark:text-secondary dark:bg-primary py-4 px-6 rounded-full text-center cursor-pointer group transform'
			>
				<span class='absolute w-0 h-0 transition-all duration-500 ease-out dark:bg-darkButtonHover bg-darkButtonHover  rounded-full group-hover:w-56 group-hover:h-56'></span>
				<span class='absolute  inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent '></span>
				<span class='relative w-full  transition-colors duration-200 ease-in-out group-hover:text-white'>
					Resume
				</span>
			</button>

			{showModal ? (
				<>
					<div
						data-aos='fade-down'
						data-aos-duration='1000'
						className='overflow-y-auto backdrop-blur-sm overflow-x-hidden fixed top-20 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full mx-auto'
					>
						<div className='relative p-4 w-full max-w-3xl h-full md:h-auto mx-auto'>
							<div className='relative bg-darkModeBg rounded-lg shadow dark:bg-primary'>
								<div className='flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600'>
									<h3 className='text-xl font-semibold text-primary dark:text-darkModeBg'>
										Resume
									</h3>
									<button
										onClick={() => setShowModal(false)}
										type='button'
										class='text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
										data-modal-toggle='defaultModal'
									>
										<svg
											aria-hidden='true'
											class='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fill-rule='evenodd'
												d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
												clip-rule='evenodd'
											></path>
										</svg>
										<span class='sr-only'>Close modal</span>
									</button>
								</div>

								<div className='p-6 flex  '>
									<p className='mr-2 text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
										2021
									</p>
									<div className='flex flex-col'>
										<p className='text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
											Noroff School of technology and digital media
										</p>
										<p className='text-base leading-relaxed text-primary dark:text-gray-500 '>
											Frontend Development
										</p>
									</div>
								</div>

								<div className='p-6 flex '>
									<p className='mr-2 text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
										2016
									</p>
									<div className='flex flex-col'>
										<p className='text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
											Sales Employee
										</p>
										<p className='text-base leading-relaxed text-primary dark:text-gray-500 '>
											Customer relations, sales, economic goals
										</p>
									</div>
								</div>

								<div className='p-6 flex dark:border-gray-600'>
									<p className='mr-2 text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
										2015
									</p>
									<div className='flex flex-col'>
										<p className='text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
											Store Assistant
										</p>
										<p className='text-base leading-relaxed text-primary dark:text-gray-500 '>
											Sales and customer service
										</p>
									</div>
								</div>

								<div className='p-6 flex dark:border-gray-600'>
									<p className='mr-2 text-base leading-relaxed text-primary dark:text-darkModeBg font-semibold'>
										2013
									</p>
									<div className='flex flex-col'>
										<p className='text-base leading-relaxed text-primary  dark:text-darkModeBg font-semibold'>
											Logistics Employee
										</p>
										<p className='text-base leading-relaxed text-primary dark:text-gray-500 '>
											Distribution of goods and materials
										</p>
									</div>
								</div>

								{/* <div className='flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
									<button
										data-modal-toggle='defaultModal'
										type='button'
										className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
									>
										I accept
									</button>
									<button
										data-modal-toggle='defaultModal'
										type='button'
										className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
									>
										Decline
									</button>
								</div> */}
							</div>
						</div>
					</div>
				</>
			) : null}
		</div>
	);
};

export default Hero;
