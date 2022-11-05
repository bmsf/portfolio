// import rainy from '../..assets/images/rainydays.jpeg';
import bw from '../../assets/images/blomsterwerket.jpeg';
import csm from '../../assets/images/csm.jpeg';

const projectList = [
	{
		id: 1,
		name: 'Blomsterwerket',
		info: 'Self developed project targeted towards a small flower shop from a little place called Råde. First project using React in combination with Material UI. Commerce.js used as a eCommerce SDK.',
		technologies: [
			'HTML',
			'CSS',
			'JavaScript',
			'React',
			'Commerce.js',
			'Stripe',
		],
		img: bw,
		color: '#131c25',
		github: 'https://github.com/bmsf/blomsterwerket',
		link: 'https://blomsterwerket.vercel.app/',
	},
	{
		id: 2,
		name: 'Community Science Museum',
		info: 'School project with a goal to develop and design a website for a fictional Community Sience Musem. The project was to test our abilites in the subjects we had in our first semester at Noroff Frontend-Development studies.',
		technologies: ['HTML', 'CSS', 'Adobe XD'],
		img: csm,
		color: '#295e73',
		github: 'https://github.com/bmsf/semesterproject1',
		link: 'https://fervent-panini-f6e9ad.netlify.app/',
	},
	{
		id: 3,
		name: 'Rainy Days',
		info: '',
		technologies: ['HTML', 'CSS', 'Adobe XD'],
		img: bw,
		color: '#734701',
		github: 'https://github.com/bmsf/eksamen',
		link: 'https://wonderful-payne-f634cd.netlify.app/',
	},
];

export default projectList;
