import React from 'react';

const Hero = () => {
	return (
		<div
			className='flex flex-col space-y-8 relative left-0'
			// data-aos='fade-right'
			// data-aos-duration='2000'
			// data-aos-delay='1000'
		>
			<h1
				className='text-3xl md:text-4xl z-10 '
				data-aos='fade-down'
				data-aos-duration='1000'
				data-aos-delay='1000'
			>
				Hi, Im Bjørn-Magnus Svendsen Fromreide. Welcome to my portfolio.
			</h1>
			<p
				className='w-2/3'
				data-aos='fade-down'
				data-aos-duration='1000'
				data-aos-delay='1600'
			>
				Im a frontend developer from Oslo. I like to make websites and
				applications for clients and for fun.
			</p>

			<a
				data-aos='fade-down'
				data-aos-duration='1000'
				data-aos-delay='2000'
				href='#projects'
				class='bg-button text-primary w-48 transition-all relative inline-flex items-center justify-center  overflow-hidden tracking-tighter dark:text-secondary dark:bg-primary py-4 px-6 rounded-full text-center cursor-pointer group transform'
			>
				<span class='absolute w-0 h-0 transition-all duration-500 ease-out dark:bg-darkButtonHover bg-darkButtonHover  rounded-full group-hover:w-56 group-hover:h-56'></span>
				<span class='absolute  inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent '></span>
				<span class='relative w-full  transition-colors duration-200 ease-in-out group-hover:text-white'>
					Resume
				</span>
			</a>
		</div>
	);
};

export default Hero;
