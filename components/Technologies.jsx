import React from 'react';
import { AiFillHtml5, AiFillApi } from 'react-icons/ai';
import { DiCss3, DiReact, DiGit } from 'react-icons/di';
import { SiJavascript, SiAdobexd, SiTailwindcss } from 'react-icons/si';

const Technologies = () => {
	return (
		<section className='flex flex-col h-screen items-center' id='technologies'>
			<h2 class='mb-4 text-4xl font-extrabold text-center text-gray-900 dark:text-white'>
				Technologies
			</h2>
			<div className='line'></div>
			<div className='grid grid-cols-4 gap-48 mt-16'>
				<div className='flex flex-col items-center'>
					<AiFillHtml5
						size='5rem'
						color='#E44D27'
						className='hover:text-secondary  transform transition duration-500 hover:scale-125'
					/>
					<p>HTML5</p>
				</div>
				<div className='flex flex-col items-center'>
					<DiCss3
						size='5rem'
						color='#1471B6'
						className='hover:text-secondary  transform transition duration-500 hover:scale-125'
					/>
					<p>CSS3</p>
				</div>
				<div className='flex flex-col items-center'>
					<SiJavascript
						size='5rem'
						color='#F7DF1C'
						className='hover:text-secondary  transform transition duration-500 hover:scale-125'
					/>
					<p>JavaScript</p>
				</div>
				<div className='flex flex-col items-center'>
					<DiReact
						size='5rem'
						color='#6FCFEF'
						className='hover:text-secondary  transform transition duration-500 hover:scale-125'
					/>
					<p>React</p>
				</div>
				<div className='flex flex-col items-center'>
					<SiAdobexd
						size='5rem'
						color='#440235'
						className='hover:text-secondary  transform transition duration-500 hover:scale-125'
					/>
					<p>Adobe XD</p>
				</div>
				<div className='flex flex-col items-center'>
					<SiTailwindcss
						size='5rem'
						color='#37BCF8'
						className='hover:text-secondary  transform transition duration-500 hover:scale-125'
					/>
					<p>Tailwind</p>
				</div>
				<div className='flex flex-col items-center'>
					<DiGit
						size='5rem'
						color='#F34E29'
						className='hover:text-secondary  transform transition duration-500 hover:scale-125'
					/>
					<p>Git</p>
				</div>
				<div className='flex flex-col items-center'>
					<AiFillApi
						size='5rem'
						className='hover:text-secondary  transform transition duration-500 hover:scale-125'
					/>
					<p>Commerce.js</p>
				</div>
			</div>
		</section>
	);
};

export default Technologies;
