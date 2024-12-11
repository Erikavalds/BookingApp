import { useEffect, useRef } from 'react';
import useApiFetch from '../../hooks/useApiFetch';
import { useHotels } from '../../context/hotels';

function Filter({ setResult }) {
	const { getByCity } = useHotels();
	const [cities, getCities] = useApiFetch();

	const selectRef = useRef();

	useEffect(() => {
		getCities({
			url: '/cities',
		});
	}, []);

	const handleChange = () => {
		getByCity(selectRef.current.value);
		setResult('');
	};

	return (
		<div>
			<select
				ref={selectRef}
				className="input-form w-full md:w-fit focus:outline-none "
				onChange={handleChange}
			>
				<option value="">All cities</option>
				{cities.map((city) => (
					<option value={city?.id}>{city?.name}</option>
				))}
			</select>
		</div>
	);
}

export default Filter;
