'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const links = [{
	name: 'home', path: '/', id: 0,
}, {
	name: 'contact', path: '/contact', id: 4,
}];

export const Nav = () => {
	const pathname = usePathname();
	console.log(pathname);


	return (<nav className="flex gap-8">
		{links.map((link) => {
			return <Link
				className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} capitalize hover:text-accent transition-all`}
				href={link.path}
				key={link.id}
			>{link.name}</Link>;
		})}
	</nav>);
};