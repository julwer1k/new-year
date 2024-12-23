'use client'; // Указываем, что это клиентский компонент

import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Congratulation = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [friend, setFriend] = useState(null);

	useEffect(() => {
		const friendId = searchParams.get('id');
		if (friendId) {
			const friendIdNumber = parseInt(friendId);
			const foundFriend = initialFriends.find(friend => friend.id === friendIdNumber);
			if (foundFriend) {
				setFriend(foundFriend);
			} else {
				// Обработка ошибки, если друг не найден
				router.push('/not-found'); // Предполагается, что у вас есть страница 404
			}
		}
	}, [searchParams]);

	if (!friend) return <div>Loading...</div>;

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className="py-6"
		>
			<div>Congratulations to friend with ID: {friend.id} - {friend.name}</div>
		</motion.section>
	);
};

export default Congratulation;