import { motion } from 'framer-motion';

// variants

const stairAnimation = {
	initial: {
		top: '0%',
	},
	animate: {
		top: '100%',
	},
	exit: {
		top: ['100%', '0%'],
	},
};

const reverseIndex = (index) => {
	const totalSteps = 6;

	return totalSteps - index - 1;
};

export const Stairs = () => {
	return (
		<>
			{/* render 6 motion divs, each representing a step of the stairs

			 Each div wil have tha same animation defined by the stairsAnimation object
			 The delay for each div is

			 */}
			{[...Array(6)].map((_, index) => {
				return <motion.div
					className="h-full w-full bg-white relative"
					key={index}
					variants={stairAnimation}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{ duration: 0.4, ease: 'easeInOut', delay: reverseIndex(index) * 0.1 }}
				/>;
			})}
		</>
	);
};