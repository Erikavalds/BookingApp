import RelatedCard from './RelatedCard';

function RelatedList({ related }) {
	return (
		<div>
			{related.map((hotel) => (
				<RelatedCard hotel={hotel} />
			))}

			{related?.length === 0 && (
				<p className="font-semibold text-center">No related hotels</p>
			)}
		</div>
	);
}

export default RelatedList;
