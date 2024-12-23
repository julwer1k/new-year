import Link from 'next/link';

import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const socials = [
	{
		icon: <FaGithub />, path: '', id: 0,
	},
	{
		icon: <FaLinkedin />, path: '', id: 1,
	},
	{
		icon: <FaTelegram />, path: '', id: 2,
	},
];

export const Social = ({containerStyles, iconStyles}) => {
	return (
		<div className={containerStyles}>
			{socials.map((social) => {

				return <Link key={social.id} className={iconStyles} href={social.path}>{social.icon}</Link>
			})}
		</div>
	);
};