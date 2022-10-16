import { useState } from 'react';
import React from 'react';
import projectList from './data';

const Projects = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<section
			className='flex flex-col items-center justify-between'
			id='projects'
		>
			<h2 className='border-b-2 border-darkModeBg dark:border-primary mb-10 text-3xl mt-10'>
				Projects
			</h2>

			<div className='flex flex-col items-center'>
				{projectList.map((project) => {
					return (
						<a
							className='flex flex-col text-primary w-10/12 mb-10 p-10 items-center cursor-pointer  lg:flex-row '
							style={{ backgroundColor: project.color }}
							onClick={() => window.open(`${project.link}`, '_blank')}
						>
							<div className='flex flex-col align-center justify-center'>
								<h3 className='text-3xl font-bold text-center'>
									{project.name}
								</h3>
								<p className='my-10 leading-loose lg:w-2/3'>{project.info}</p>
								<p>{project.github}</p>
							</div>
							<div className='flex flex-col items-center justify-center'>
								<img src={`${project.img}`} className='w-4/6'></img>
							</div>
							<div className='flex flex-wrap uppercase'>
								{project.technologies.map((tech) => {
									return (
										<div
											className='tech p-3 my-2 mr-3 bg-hsla(0,0%,100%,.14)'
											id='bg-tech'
										>
											{tech}
										</div>
									);
								})}
							</div>
						</a>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
