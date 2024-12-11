import { MdOutlineLocationOn } from 'react-icons/md';
import RatingStars from '../RatingStars';

function Description({ rating, address, description }) {
	return (
		<div>
			<div className="mb-4 ">
				<RatingStars rating={rating} />
			</div>
			<p className="flex items-center gap-1 mb-4">
				<MdOutlineLocationOn />
				<span className="text-xs">{address}</span>
			</p>
			<p>{description}</p>
		</div>
	);
}

export default Description;
