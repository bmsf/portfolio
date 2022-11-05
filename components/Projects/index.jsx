import { useState } from 'react';
import React from 'react';
import projectList from './data';

import Image from 'next/image';

const Projects = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<section
			className='flex flex-col items-center justify-between mb-10'
			id='projects'
		>
			<h2 class='m-24 text-4xl font-extrabold text-center text-gray-900 dark:text-white'>
				Projects
			</h2>

			<div className='flex flex-col items-center'>
				{projectList.map((project) => {
					return (
						<a
							key={project.id}
							className='flex flex-col text-primary w-10/12 mb-10 items-center cursor-pointer lg:flex-row'
							style={{ backgroundColor: project.color, color: project.font }}
							onClick={() => window.open(`${project.link}`, '_blank')}
						>
							<div>
								<div class='p-10'>
									<div className='flex flex-col align-center justify-center'>
										<h3 className='text-3xl font-bold text-center lg:text-left'>
											{project.name}
										</h3>
										<p className='my-10 leading-loose'>{project.info}</p>
									</div>

									<div className='flex flex-wrap uppercase'>
										{project.technologies.map((tech) => {
											return (
												<div
													key={project.tech}
													className='tech p-3 my-2 mr-3'
													// id='bg-tech'
													style={{ backgroundColor: project.bgTech }}
												>
													{tech}
												</div>
											);
										})}
									</div>
								</div>
							</div>
							<Image
								alt={`Image of project`}
								src={project.img}
								className='w-6/6 sm:w-4/6 lg:w-3/6'
							/>
						</a>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
