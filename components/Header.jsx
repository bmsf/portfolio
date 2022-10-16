import { React, useState } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { DiCode } from 'react-icons/di';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ({ setDarkMode, darkMode }) => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<header
			className='flex justify-between items-center p-5 w-5/6'
			data-aos='fade-zoom-in'
			data-aos-easing='ease-in-back'
			data-aos-delay='2000'
			data-aos-offset='0'
		>
			<a
				href='./'
				className='flex'
				data-aos='fade-zoom-in'
				data-aos-duration='1000'
				data-aos-delay='2200'
			>
				<DiCode size='2rem' />
				<span className='pt-1'>Portfolio</span>
			</a>
			<nav
				className='hidden lg:flex'
				data-aos='fade-zoom-in'
				data-aos-duration='1000'
				data-aos-delay='2600'
			>
				<li className='mr-14'>
					<a href='#projects' className='dark:hover:text-darkButtonHover'>
						Projects
					</a>
				</li>
				<li className='mr-14'>
					<a href='#technologies' className='dark:hover:text-darkButtonHover'>
						Technologies
					</a>
				</li>
				<li>
					<a href='#contact' className='dark:hover:text-darkButtonHover'>
						Contact
					</a>
				</li>
			</nav>
			<div
				className='flex'
				data-aos='fade-zoom-in'
				data-aos-duration='1000'
				data-aos-delay='3000'
			>
				<BsFillMoonStarsFill
					className=' mr-3 dark:hover:text-darkButtonHover cursor-pointer transform transition duration-500 hover:scale-125'
					size='2rem'
					onClick={() => setDarkMode(!darkMode)}
				/>
				<a href='https://github.com/bmsf' target='_blank' rel='noreferrer'>
					<AiFillGithub
						className='mr-3 dark:hover:text-darkButtonHover cursor-pointer transform transition duration-500 hover:scale-125'
						size='2rem'
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/bj%C3%B8rn-magnus-fromreide-18b1a1170/'
					target='_blank'
					rel='noreferrer'
				>
					<AiFillLinkedin
						size='2rem'
						className='cursor-pointer dark:hover:text-darkButtonHover transform transition duration-500 hover:scale-125'
					/>
				</a>
			</div>
		</header>
	);
};

export default Header;
