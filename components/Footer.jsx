import React from 'react';
import { DiCode } from 'react-icons/di';

const Footer = () => {
	return (
		<footer class='p-4 rounded-lg md:px-6 md:py-8 dark:bg-darkModeBg w-10/12'>
			<div class='sm:flex sm:items-center sm:justify-between '>
				<a href='./' className='flex mb-3 sm:mb-0'>
					<DiCode size='2rem' />
					<span className='pt-1'>Portfolio</span>
				</a>
				<ul class='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-primary'>
					<li>
						<a href='#projects' class='mr-4 hover:underline md:mr-6'>
							Projects
						</a>
					</li>
					<li>
						<a href='#technologies' class='mr-4 hover:underline md:mr-6 '>
							Technologies
						</a>
					</li>
					<li>
						<a href='#contact' class='hover:underline'>
							Contact
						</a>
					</li>
				</ul>
			</div>
			<hr class='my-6 border-gray-200 sm:mx-auto dark:primary lg:my-8' />
			<span class='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
				© 2022{' '}
				<a href='https://flowbite.com/' class='hover:underline'>
					BMSF™
				</a>
				. All Rights Reserved.
			</span>
		</footer>
	);
};

export default Footer;
