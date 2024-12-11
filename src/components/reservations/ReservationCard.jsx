import { MdCalendarMonth } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';
import { IoBed } from 'react-icons/io5';
import { CgDollar } from 'react-icons/cg';
import { priceFormat } from '../../utils';
import { Link } from 'react-router';

function ReservationCard({ reservation, onDelete, onRate }) {
	// Sacar los dias de la fecha de llegada y de salida
	const checkInDate = new Date(reservation.chekIn + 'T00:00:00');
	const checkOutDate = new Date(reservation.chekOut + 'T00:00:00');

	// Calcular el total de noches
	const milisecondsPerDay = 1000 * 60 * 60 * 24; //milisegundos por dia

	const nigths = Math.ceil((checkOutDate - checkInDate) / milisecondsPerDay);

	// Sumar el precio de las noches por el precio
	const pricePerNigth = parseInt(reservation?.hotel?.price);

	const totalPrice = pricePerNigth * nigths;

	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
			<h2 className="text-xl font-semibold p-4 bg-blue-500 text-white">
				<Link to={`/hotel/${reservation?.hotel?.id}}`}>
					{reservation?.hotel.name}
				</Link>
			</h2>

			<div className="p-6 flex flex-col gap-5">
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<MdCalendarMonth className="size-8" />
						<div>
							<p className="font-semibold ">Arrival</p>
							<p className="text-xs">{reservation.checkIn}</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<MdCalendarMonth className="size-8" />
						<div>
							<p className="font-semibold ">Departure</p>
							<p className="text-xs">{reservation.checkOut}</p>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-2">
					<MdLocationOn />
					<p className="text-sm ">
						{reservation?.hotel?.city?.name},{' '}
						{reservation?.hotel?.city?.country}
					</p>
				</div>

				<div className="flex items-center gap-2">
					<IoBed />
					<p>
						{nigths} {nigths === 1 ? 'nigth' : 'nigths'}
					</p>
				</div>

				<div className="flex justify-between items-center ">
					<div className="flex items-center gap-2">
						<CgDollar />
						<p>Price per nigth</p>
					</div>
					<p className="font-semibold">{priceFormat.format(pricePerNigth)}</p>
				</div>

				<div className="flex justify-between items-center border-t pt-4">
					<div className="flex items-center gap-2">
						<CgDollar />
						<p className="font-semibold text-lg">Total</p>
					</div>
					<p className="font-semibold text-xl">
						{priceFormat.format(totalPrice)}
					</p>
				</div>

				<div className="flex items-center gap-2"></div>
			</div>

			<div className="flex justify-between bg-gray-50 py-4 px-6">
				<button
					className="btn bg-red-500"
					onClick={() => {
						onDelete(reservation?.id);
					}}
				>
					Delete
				</button>
				<button
					className="btn bg-yellow-500"
					onClick={() => onRate(reservation?.hotel?.id)}
				>
					Rate
				</button>
			</div>
		</div>
	);
}

export default ReservationCard;
