import React from 'react';
import { MdAlternateEmail } from 'react-icons/md';

const Contact = () => {
	return (
		<section class='bg-primary dark:bg-darkModeBg' id='contact'>
			<div class='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
				<h2
					data-aos='fade-up'
					data-aos-duration='1000'
					data-aos-delay='500'
					class='mb-4 text-4xl font-extrabold text-center text-gray-900 dark:text-white'
				>
					Get in touch
				</h2>
				<p
					data-aos='fade-up'
					data-aos-duration='1000'
					data-aos-delay='700'
					class='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'
				>
					Send me an email if you want to connect
				</p>
				<p
					data-aos='fade-up'
					data-aos-duration='1000'
					data-aos-delay='900'
					className='mb-8 lg:mb-16 font-light text-center   sm:text-xl'
				>
					Email:{' '}
					<a href='mailto:fromreide94@gmail.com' className='underline'>
						fromreide94@gmail.com
					</a>
				</p>
				{/* <div className='bg-white h-20 w-20 flex justify-center items-center dark:bg-darkModeBgLighter rounded mx-auto'>
					<MdAlternateEmail
						className=' dark:hover:text-darkButtonHover decoration-darkModeIcon cursor-pointer transform transition duration-500 hover:scale-125'
						size='2rem'
					/>
				</div> */}
			</div>
		</section>
	);
};

export default Contact;
