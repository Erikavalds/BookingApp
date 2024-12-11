import { IoStar } from 'react-icons/io5';
import { useState } from 'react';
import { cn } from '../../utils';

function ReviewRating({ setReview }) {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const handleClick = (index) => {
		setRating(index);
		setReview((prevState) => ({
			...prevState,
			rating: index,
		}));
	};

	const handleHover = (index) => {
		setHover(index);
	};

	return (
		<div className="flex gap-2">
			{[...Array(5)].map((_, index) => (
				<button
					key={index + 1}
					onClick={() => handleClick(index + 1)}
					onMouseEnter={() => handleHover(index + 1)}
					className="text-gray-400"
				>
					<IoStar
						className={cn(
							'text-3xl',
							(hover > index || rating > index) && 'text-yellow-500',
						)}
					/>
				</button>
			))}
		</div>
	);
}

export default ReviewRating;
