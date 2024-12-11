import { useEffect, useState } from 'react';
import useApiFetch from '../hooks/useApiFetch';
import ReservationList from '../components/reservations/ReservationList';
import Modal from '../components/Modal';
import Review from '../components/reservations/Review';

function Reservation() {
	const [reservation, fetchReservations] = useApiFetch();

	const [openModal, setOpenModal] = useState(false);

	const [child, setChild] = useState(null);

	useEffect(() => {
		fetchReservations({
			url: '/bookings',
		});
	}, []);

	const handleDelete = (id) => {
		fetchReservations({
			url: `/booking/${id}`,
			method: 'DELETE',
		});
	};

	const closeModal = () => {
		setOpenModal(false);
	};

	const handleOpenModal = (id) => {
		setOpenModal(true);
		setChild(<Review hotelId={id} closeModal={closeModal} />);
	};

	return (
		<div className="max-w-5xl mx-auto px-5 py-16">
			<ReservationList
				reservations={reservations}
				onDelete={handleDelete}
				onRate={handleOpenModal}
			/>

			<Modal openModal={openModal} closeModal={closeModal}>
				{child}
			</Modal>
		</div>
	);
}

export { Reservation };
