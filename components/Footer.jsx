import React from 'react';

const Footer = () => {
	return (
		<footer class='p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-darkModeBgLighter'>
			<span class='text-sm text-gray-500 sm:text-center dark:text-primary'>
				© 2022{' '}
				<a href='https://flowbite.com/' class='hover:underline'>
					BMSF™
				</a>
				. All Rights Reserved.
			</span>
			<ul class='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-primary sm:mt-0'>
				<li>
					<a href='#projects' class='mr-4 hover:underline md:mr-6'>
						Projects
					</a>
				</li>
				<li>
					<a href='#technologies' class='mr-4 hover:underline md:mr-6'>
						Technologies
					</a>
				</li>
				<li>
					<a href='#contact' class='hover:underline'>
						Contact
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
