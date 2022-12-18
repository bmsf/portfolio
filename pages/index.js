import React, { useEffect, useState } from 'react';
import * as components from '../components/index';
import { motion } from 'framer-motion';

const Home = () => {
	useEffect(() => {
		document.title = 'Portfolio - Bjørn-Magnus Svendsen Fromreide';
	}, []);

	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<main className='flex flex-col items-center bg-primary text-secondary dark:bg-darkModeBg dark:text-primary overflow-x-hidden'>
				<section className='flex flex-col h-screen items-center justify-between gap-5'>
					<components.Header setDarkMode={setDarkMode} darkMode={darkMode} />
					<div className='mb-24 w-2/3'>
						<components.Hero />
						<components.BackgroundAnimation darkMode={darkMode} />
					</div>
					<motion.a
						initial={{ y: 100 }}
						animate={{ y: 0 }}
						transition={{ ease: 'easeOut', duration: 1 }}
						href='#projects'
						className='relative hover:text- dark:hover:text-darkButtonHover bottom-10'
					></motion.a>
				</section>
				<components.Projects />
				<components.Technologies />
				<components.Contact darkMode={darkMode} />
				<components.Footer />
			</main>
		</div>
	);
};

export default Home;
