'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Home() {
	const router = useRouter();
	const pathname = usePathname();
	const balls = [
		{
			id: 0,
			src: '/assets/orange.png',
			classNames: 'left-[5%] bottom-0',
			blurClassName: 'shadow-[0_0_30px_15px_rgba(255,179,23,0.6)] xl:shadow-[0_0_60px_15px_rgba(255,179,23,0.6)]',
		},
		{
			id: 1,
			src: '/assets/pink.png',
			classNames: 'left-[20%] bottom-0',
			blurClassName: 'shadow-[0_0_30px_15px_rgba(255,78,227,0.6)] xl:shadow-[0_0_60px_15px_rgba(255,78,227,0.6)]',
		},
		{
			id: 2,
			src: '/assets/blue.png',
			classNames: 'left-[35%] bottom-0',
			blurClassName: 'shadow-[0_0_30px_15px_rgba(70,122,255,0.6)] xl:shadow-[0_0_60px_15px_rgba(70,122,255,0.6)]',
		},
		{
			id: 3,
			src: '/assets/purple.png',
			classNames: 'left-[48%] bottom-0',
			blurClassName: 'shadow-[0_0_30px_15px_rgba(174,80,244,0.6)] xl:shadow-[0_0_60px_15px_rgba(174,80,244,0.6)]',
		},
		{
			id: 4,
			src: '/assets/orange.png',
			classNames: 'left-[60%] bottom-[-5%]',
			blurClassName: 'shadow-[0_0_30px_15px_rgba(255,179,23,0.6)] xl:shadow-[0_0_60px_15px_rgba(255,179,23,0.6)]',
		},
		{
			id: 5,
			src: '/assets/red.png',
			classNames: 'left-[70%] bottom-0',
			blurClassName: 'shadow-[0_0_30px_15px_rgba(255,69,64,0.6)] xl:shadow-[0_0_60px_15px_rgba(255,69,64,0.6)]',
		},
		{
			id: 6,
			src: '/assets/blue.png',
			classNames: 'left-[80%] bottom-0',
			blurClassName: 'shadow-[0_0_30px_15px_rgba(70,122,255,0.6)] xl:shadow-[0_0_60px_15px_rgba(70,122,255,0.6)]',
		},
	];
	const initialFriends = [
		{
			id: 0,
			name: 'Egor',
			path: '/egor',
			image: '/assets/photo/egor.webp',
			associations: [
				{
					id: 0,
					name: 'tea',
				},
				{
					id: 1,
					name: 'sonic',
				},
				{
					id: 2,
					name: 'vodafone',
				},
			],
			isOpen: false,
			isClick: false,
		},
		{
			id: 1,
			name: 'Illya',
			path: '/egor',
			image: '/assets/photo/ilya.webp',
			associations: [
				{
					id: 0,
					name: 'calvin',
				},
				{
					id: 1,
					name: 'sonic',
				},
				{
					id: 2,
					name: 'lawyer',
				},
			],
			isOpen: false,
			isClick: false,
		},
		{
			id: 2,
			name: 'Kirill',
			path: '/egor',
			image: '/assets/photo/kirill.webp',
			associations: [
				{
					id: 0,
					name: 'camry',
				},
				{
					id: 1,
					name: 'fist',
				},
				{
					id: 2,
					name: 'nuts',
				},
			],
			isOpen: false,
			isClick: false,
		},
		{
			id: 3,
			name: 'Liza',
			path: '/egor',
			image: '/assets/photo/liza.webp',
			associations: [
				{
					id: 0,
					name: 'tiktok',
				},
				{
					id: 1,
					name: 'nalivki',
				},
				{
					id: 2,
					name: 'masha',
				},
			],
			isOpen: false,
			isClick: false,
		},
		{
			id: 4,
			name: 'Masha',
			path: '/egor',
			image: '/assets/photo/masha.webp',
			associations: [
				{
					id: 0,
					name: 'vodka',
				},
				{
					id: 1,
					name: 'egor',
				},
				{
					id: 2,
					name: 'buterbrod',
				},
			],
			isOpen: false,
			isClick: false,
		},
		{
			id: 5,
			name: 'Sasha',
			path: '/egor',
			image: '/assets/photo/sasha.webp',
			associations: [
				{
					id: 0,
					name: 'fish',
				},
				{
					id: 1,
					name: 'test',
				},
				{
					id: 2,
					name: 'vodafone',
				},
			],
			isOpen: false,
			isClick: false,
		},
		{
			id: 6,
			name: 'Alyona',
			path: '/egor',
			image: '/assets/photo/alyona.webp',
			associations: [
				{
					id: 0,
					name: 'rio',
				},
				{
					id: 1,
					name: 'dance',
				},
				{
					id: 2,
					name: 'red-stone',
				},
			],
			isOpen: false,
			isClick: false,
		},
		{
			id: 7,
			name: 'Ignat',
			path: '/egor',
			image: '/assets/photo/ignat.webp',
			associations: [
				{
					id: 0,
					name: 'puri',
				},
				{
					id: 1,
					name: 'sixteen',
				},
				{
					id: 2,
					name: 'meet',
				},
			],
			isOpen: false,
			isClick: false,
		},
	];

	const [friends, setFriends] = useState(
		JSON.parse(sessionStorage.getItem('friends')) || initialFriends
	);
	const [isShowContent, setIsShowContent] = useState(
		JSON.parse(sessionStorage.getItem('isShowContent')) || false
	);
	const [closeHeroPage, setCloseHeroPage] = useState(
		JSON.parse(sessionStorage.getItem('closeHeroPage')) || false
	);
	const [isRenderList, setIsRenderList] = useState(
		JSON.parse(sessionStorage.getItem('isRenderList')) || false
	);

	const hasClickedFriend = friends.some(friend => friend.isClick);
	const [triggerShuffle, setTriggerShuffle] = useState(false);

	useEffect(() => {
		// Check if any friend has been clicked when the component mounts or when pathname changes
		const checkForClicked = () => {

			if (hasClickedFriend !== triggerShuffle) {
				setTriggerShuffle(hasClickedFriend);
				if (hasClickedFriend) {
					setIsRenderList(false);
					shuffleFriends();

					setTimeout(() => {
						setIsRenderList(true);
					}, 2000);
				}
			}
		};

		checkForClicked();
	}, [pathname, friends]);

	const shuffleFriends = () => {
		setFriends(prevFriends => {
			const [clickedFriends, notClickedFriends] = prevFriends.reduce(
				(acc, friend) => {
					acc[friend.isClick ? 0 : 1].push(friend);
					return acc;
				},
				[[], []]
			);

			for (let i = notClickedFriends.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[notClickedFriends[i], notClickedFriends[j]] = [notClickedFriends[j], notClickedFriends[i]];
			}

			return [...notClickedFriends, ...clickedFriends];
		});
	};

	useEffect(() => {
		sessionStorage.setItem("friends", JSON.stringify(friends));
	}, [friends]);

	useEffect(() => {
		sessionStorage.setItem('isShowContent', JSON.stringify(isShowContent));
	}, [isShowContent]);

	useEffect(() => {
		sessionStorage.setItem('closeHeroPage', JSON.stringify(closeHeroPage));
	}, [closeHeroPage]);

	useEffect(() => {
		sessionStorage.setItem('isRenderList', JSON.stringify(isRenderList));
	}, [isRenderList]);


	const handleSwipeToTable = () => {
		setIsShowContent(true);

		setTimeout(() => {
			setCloseHeroPage(true);
			setIsRenderList(true);
		}, 800);
	};

	const navigateToFriend = (path, id) => {
		setFriends(prevFriends =>
			prevFriends.map(friend =>
				friend.id === id
					? { ...friend, isClick: true }
					: friend
			)
		);

		router.push(path);
	};

	const showCard = (id) => {
		setFriends(prevFriends =>
			prevFriends.map(friend =>
				friend.id === id
					? { ...friend, isOpen: true }
					: friend
			)
		);
	};

	return (
		<div>
			{!closeHeroPage && (<>
					<section
						className={classNames({
							"h-[calc(100vh+104px)] xl:h-[calc(100vh+140px)]": isShowContent,
							"h-[calc(100vh-104px)] xl:h-[calc(100vh-140px)]": !isShowContent
						}, " relative")}
					>
						<div className="rope mb-4 xl:mb-12">
							{balls.map((b) => (
								<a
									key={b.id}
									className={`${b.classNames} absolute cursor-pointer`}
								>
									<Image
										src={b.src}
										alt=""
										width={65}
										height={91}
										className="w-[32px] h-[45px] xl:w-[65px] xl:h-[91px]"
									/>
									<span
										className={`${b.blurClassName} absolute w-[10px] h-[10px] xl:w-[60px] xl:h-[60px] blur-[15px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}
									/>
								</a>
							))}
						</div>

						<div className="container mx-auto">
							<div className="flex xl:pt-20 xl:pb-24 justify-center flex-col items-center">
								<div className="text-center">
									<h1 className="h1 mb-4 xl:mb-6">Happy New Year!</h1>

									<p className="max-w-[500px] text-xl xl:text-4xl mx-auto mb-3 xl:mb-9 text-white/80">
										I excel at crafting elegant digital experiences and I am
										proficient in various programming languages and technologies.
									</p>

									<p>
										For the best experience, open the game in prototype mode and play in fit-to-screen
										mode.
									</p>
								</div>
							</div>
						</div>
					</section>

					<div className="absolute right-0 bottom-0">
						<Image
							src="/assets/clause.png"
							alt=""
							width={618}
							height={894}
							className="w-[120px] h-[200px] xl:h-[894px] xl:w-[618px]"
						/>
					</div>
					<div className="absolute left-0 bottom-0">
						<Image
							src="/assets/present-1.png"
							alt=""
							width={534}
							height={304}
							className="w-[100px] h-[100px] xl:h-[304px] xl:w-[534px]"
						/>
					</div>
					<div className="absolute left-[5%] bottom-[20%] xl:bottom-[40%]">
						<Image
							src="/assets/present-2.png"
							alt=""
							width={90}
							height={92}
							className="w-[90px] h-[90px] xl:h-[120px] xl:w-[120px]"
						/>
					</div>
					<a
						href={'#table'}
						className="flex justify-center absolute text-[16px] p-2 bg-transparent shadow-[0_8px_6px_-2px_rgba(0,0,0,0.6)] w-full max-w-[120px] bottom-[20px] left-1/2 transform -translate-x-1/2 border-2 rounded-xl hover:bg-white hover:shadow-[0_4px_8px_0px_rgba(0,0,0,0.6)] hover:text-primary transition-all duration-500"
						onClick={(e) => handleSwipeToTable(e)}
					>
						Continue ᨆ
					</a>
				</>
			)}

			{isShowContent && (
				<section
					className="h-[calc(100vh-104px)] xl:h-[calc(100vh-140px)]"
				>
					<div className="flex text-center justify-center pt-8 pb-8">
						<div
							className="w-full flex justify-center items-center flex-wrap max-w-[650px] sm:max-w-[1200px] xl:max-w-[1400px] xxl:max-w-[1500px] gap-4"
							id="table"
						>

							{isRenderList && friends && friends.map(friend => {
								return (
									<div
										className={classNames({
										}, "flex flex-col gap-4 justify-center items-center w-[250px] sm:w-[300px] xl:w-[400px] border-[#0f9] p-4 bg-[rgba(37,228,171,0.35)] rounded-xl h-auto border-2 z-[0] relative")}
										key={friend.id}
									>
										{friend.isOpen && <h2 className="text-4xl">{friend.name}</h2>}

										<div>
											{!friend.isOpen && <Image
												src="/assets/photo/question.png"
												width={534}
												height={304}
												alt=""
												className="object-cover rounded-xl w-[250px] h-[300px] xl:w-[534px] relative z-[1]"
											/>}

											{friend.isOpen && <Image
												src={friend.image}
												alt=""
												width={534}
												height={304}
												className={classNames({
													'relative': friend.isOpen,
													'absolute z-[-1] top-4 left-4': !friend.isOpen,
													'show-image': friend.isOpen
												}, 'max-w-[212px] object-cover rounded-xl w-[250px] h-[250px] xl:w-[534px]')}
											/>}

										</div>

										<div>
											<p className="mx-auto mb-2 text-4xl border-b border-white w-max text-center">Association</p>

											<div className="flex gap-2 sm:gap-4">
												{friend.associations.map(association => {
													return (
														<div
															key={association.id}
															className="w-[70px] h-[70px] bg-white/85 rounded-xl p-2 flex items-center justify-center overflow-hidden cursor-pointer scale"
														>
															<span className={`${association.name} scale-[0.2]`}></span>
														</div>
													);
												})}
											</div>
										</div>

										{!friend.isOpen && <button
											className="pt-2 pb-2 pl-6 pr-6 text-center flex justify-center items-center rounded-xl bg-red-500/75 swing"
											onClick={() => showCard(friend.id)}
										>
											Show
										</button>}

										{friend.isOpen &&
											<Link
												href={friend.path}
												className="pt-2 pb-2 pl-6 pr-6 text-center flex justify-center items-center rounded-xl bg-red-500/75 swing"
												onClick={() => navigateToFriend(friend.path, friend.id)}
											>
												Continue
											</Link>}
									</div>
								);
							})}
						</div>
					</div>
				</section>
			)}

			<audio
				src="/assets/bg-music.mp3"
				autoPlay
				controls
			/>
		</div>
	);
}
