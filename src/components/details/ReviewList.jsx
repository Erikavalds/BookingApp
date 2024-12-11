import { useState } from 'react';
import ReviewCard from './ReviewCard';

function ReviewList({ review }) {
	const [visibleReviews, setVisibleReviews] = useState(5);
	const loadMoreIncrement = 5;

	const loadMore = () => {
		setVisibleReviews(visibleReviews + loadMoreIncrement);
	};

	return (
		<div>
			<div className="mb-4">
				{review?.slice(0, visibleReviews)?.map((review) => (
					<ReviewCard key={review?.id} review={review} />
				))}
			</div>
			{visibleReviews < reviews?.length && (
				<button className="btn" onClick={loadMore}>
					Load more...
				</button>
			)}

			{reviews?.length === 0 && (
				<p className="font-semibold text-center">No reviews yet</p>
			)}
			<div></div>
		</div>
	);
}

export default ReviewList;
