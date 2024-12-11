import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '../../utils';
import { useState } from 'react';
import useApiFetch from '../../hooks/useApiFetch';

const schema = z.object({
	checkIn: z.string().min(1, { message: 'Check-In is required' }),
	checkOut: z.string().min(1, { message: 'Check-Out is required' }),
});

function Reservation({ hotelId }) {
	const [data, createReservation] = useApiFetch();
	const [error, setError] = useState(false);
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = (dataForm) => {
		if (!checkDate(dataForm.checkIn, dataForm.checkOut)) {
			setError('Check-In must be before Check-Out');
		}
		dataForm.hotelId = hotelId;
		createReservation({
			url: '/bookings',
			method: 'POST',
			body: dataForm,
		});
		console.log(dataForm);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-4">
				<div className="flex items-center justify-center gap-2">
					<div className="flex flex-col items-center">
						<label
							htmlFor="check-in"
							className="font-semibold text-sm"
							{...register('checkIn')}
						>
							Check-in
						</label>
						<input
							id="check-in"
							type="date"
							className="border px-3 py-1 rounded-sm"
						/>
					</div>
					<div className="flex flex-col items-center">
						<label
							htmlFor="check-out"
							className="font-semibold text-sm"
							{...register('checkOut')}
						>
							Check-out
						</label>
						<input
							id="check-out"
							type="date"
							className="border px-3 py-1 rounded-sm"
						/>
					</div>
				</div>
				<button className="btn bg-emerald-500">Reservar</button>
			</div>

			<div
				className={`flex flex-col justify-center items-center gap-2 ${
					errors.checkIn || errors.checkOut ? 'block' : 'hidden'
				}`}
			>
				<p className={cn('error-validation hidden text-center')}>
					{errors.checkIn && errors.checkIn.message}{' '}
					{errors.checkOut && errors.checkOut.message}
				</p>
			</div>
		</form>
	);
}

export default Reservation;
