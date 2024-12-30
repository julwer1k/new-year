'use client';

import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('../components/HomeComponent'), { ssr: false });

export default function Home() {
	return <HomePage />;
}

