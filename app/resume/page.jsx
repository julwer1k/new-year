'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';


// about data
const about = {
	title: 'About me',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem eaque excepturi ipsa iusto, nostrum numquam voluptas!',
	info: [
		{
			fieldName: 'Name',
			fieldValue: 'Arthur Pshenko',
			id: 0,
		},
		{
			fieldName: 'Phone',
			fieldValue: '+380 976092426',
			id: 1,
		},
		{
			fieldName: 'Experience',
			fieldValue: '12+ Years',
			id: 2,
		},
		{
			fieldName: 'Telegram',
			fieldValue: '@artywhit',
			id: 3,
		},
		{
			fieldName: 'Nationality',
			fieldValue: 'American',
			id: 4,
		},
		{
			fieldName: 'Email',
			fieldValue: 'arthur.pshenko@gmail.com',
			id: 5,

		},
		{
			fieldName: 'Freelance',
			fieldValue: 'Available',
			id: 6,
		},
		{
			fieldName: 'Languages',
			fieldValue: 'English, Ukrainian',
			id: 7,
		},
	],
};

// experience data
const experience = {
	icon: '/assets/resume/badge.svg',
	title: 'My experience',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem eaque excepturi ipsa iusto, nostrum numquam voluptas!',
	items: [
		{
			company: 'Tech Solutions Inc.',
			position: 'Full Stack Developer',
			duration: '2022 - Present',
			id: 0,
		},
		{
			company: 'Web Design Studio',
			position: 'Front-end Developer Intern',
			duration: 'Summer 2021',
			id: 1,
		},
		{
			company: 'E-commerce Startup',
			position: 'Freelance Web Developer',
			duration: '2020 - 2021',
			id: 2,
		},
		{
			company: 'Tech Academy',
			position: 'Teaching Assistant',
			duration: '2019 - 2020',
			id: 3,
		},
	],
};

// education data
const education = {
	icon: '/assets/resume/badge.svg',
	title: 'My education',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem eaque excepturi ipsa iusto, nostrum numquam voluptas!',
	items: [
		{
			institution: 'Online Course Platform',
			degree: 'Full Stack Developer Bootcamp',
			duration: '2022 - Present',
			id: 0,
		},
		{
			institution: 'Online Course Platform',
			degree: 'Full Stack Developer Bootcamp',
			duration: '2022 - Present',
			id: 1,
		},
	],
};

// skills data
const skills = {
	title: 'My skills',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores autem eaque excepturi ipsa iusto, nostrum numquam voluptas!',
	skillList: [
		{
			icon: <FaHtml5 />,
			name: 'html 5',
			id: 0,
		},
		{
			icon: <FaCss3 />,
			name: 'css 3',
			id: 1,
		},
		{
			icon: <FaJs />,
			name: 'javascript',
			id: 2,
		},
		{
			icon: <FaReact />,
			name: 'react.js',
			id: 3,
		},
		{
			icon: <SiNextdotjs />,
			name: 'next.js',
			id: 4,
		},
		{
			icon: <SiTailwindcss />,
			name: 'tailwind.css',
			id: 5,
		},
		{
			icon: <FaNodeJs />,
			name: 'node.js',
			id: 6,
		},
		{
			icon: <FaFigma />,
			name: 'figma',
			id: 7,
		},
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';

import { motion } from 'framer-motion';

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>

					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* experience */}
						<TabsContent
							value="experience"
							className="w-full"
						>
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item) => {
											return <li
												key={item.id}
												className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
											>
												<span className="text-accent">{item.duration}</span>

												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>

												<div className="flex items-center gap-3">
													{/*dot*/}
													<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
													<p className="text-white/60">{item.company}</p>
												</div>
											</li>;
										})}
									</ul>
								</ScrollArea>
							</div>

						</TabsContent>

						{/* education */}
						<TabsContent
							value="education"
							className="w-full"
						>
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item) => {
											return <li
												key={item.id}
												className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
											>
												<span className="text-accent">{item.duration}</span>

												<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>

												<div className="flex items-center gap-3">
													{/*dot*/}
													<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
													<p className="text-white/60">{item.institution}</p>
												</div>
											</li>;
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* skills */}
						<TabsContent
							value="skills"
							className="w-full h-full"
						>
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
								</div>

								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillList.map((skill) => (
										<li key={skill.id}>
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
														<div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
													</TooltipTrigger>

													<TooltipContent>
														<p className="capitalize ">{skill.name}</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>

						{/* about */}
						<TabsContent
							value="about"
							className="w-full text-center xl:text-left"
						>
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>

								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item) => (
										<li key={item.id} className="flex items-center justify-center xl:justify-start gap-4">
											<span className="text-white/60">{item.fieldName}</span>
											<span className="text-xl">{item.fieldValue}</span>
										</li>
									))}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;