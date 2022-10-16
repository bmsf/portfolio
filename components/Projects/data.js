import React from 'react';
// import csm from '../../public/csm.jpeg';
// import bw from '../../public/csm.jpeg';
// import rainy from '../../public/rainydays.jpeg';

const gradientColor = 'linear-gradient(to right, #60b8e6, #587944)';

const projectList = [
	{
		id: 1,
		name: 'Blomsterwerket',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore debitis perspiciatis saepe vero quibusdam sit dolorum, assumenda recusandae sed.',
		technologies: [
			'HTML',
			'CSS',
			'JavaScript',
			'React',
			'Commerce.js',
			'Stripe',
		],
		// img: bw,
		color: '#131c25',
		github: 'https://github.com/bmsf/blomsterwerket',
		link: 'https://blomsterwerket.vercel.app/',
	},
	{
		id: 2,
		name: 'Community Science Museum',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore debitis perspiciatis saepe vero quibusdam sit dolorum, assumenda recusandae sed.',
		technologies: ['HTML', 'CSS', 'Adobe XD'],
		// img: csm,
		color: '#295e73',
		github: 'https://github.com/bmsf/semesterproject1',
		link: 'https://fervent-panini-f6e9ad.netlify.app/',
	},
	{
		id: 3,
		name: 'Rainy Days',
		info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore labore debitis perspiciatis saepe vero quibusdam sit dolorum, assumenda recusandae sed.',
		technologies: ['HTML', 'CSS', 'Adobe XD'],
		// img: rainy,
		color: '#734701',
		github: 'https://github.com/bmsf/eksamen',
		link: 'https://wonderful-payne-f634cd.netlify.app/',
	},
];

export default projectList;
