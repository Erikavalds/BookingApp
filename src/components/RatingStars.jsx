import { IoStar } from 'react-icons/io5';
import { IoStarHalfOutline } from 'react-icons/io5';
import { IoStarOutline } from 'react-icons/io5';

function RatingStars({ rating }) {
	const renderStar = (index) => {
		if (index < Math.floor(rating)) {
			return <IoStar />;
		} else if (index < rating) {
			return <IoStarHalfOutline />;
		} else {
			return <IoStarOutline />;
		}
	};

	return (
		<div className="flex items-center gap-2">
			<span className="flex items-center">
				{[...Array(5)].map((_, index) => {
					return (
						<span key={index} className="text-amber-300">
							{renderStar(index)}
						</span>
					);
				})}
			</span>
			<span>{rating}</span>
		</div>
	);
}

export default RatingStars;
