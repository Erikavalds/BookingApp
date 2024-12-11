import { useEffect, useState } from 'react';
import { useHotels } from '../context/hotels';
import HotelList from '../components/home/HotelList';
import Search from '../components/home/Search';
import Filter from '../components/home/Filter';
import Menu from '../components/Menu';
import { FaFilter } from 'react-icons/fa';

function Home() {
	const { hotels, getAll } = useHotels();

	const [result, setResult] = useState();

	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		if (hotels.length === 0) {
			getAll();
		}
	}, []);

	useEffect(() => {}, [result]);

	const filtered = hotels?.filter((hotel) =>
		hotel?.name.toLowerCase().includes(result),
	);

	const handleToggle = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<div>
			<section className="max-w-5xl mx-auto px-5 py-10">
				<div className="mb-8 flex justify-center gap-4 items-center ">
					<Search setResult={setResult} />
					<button className="md:hidden " onClick={handleToggle}>
						open
						<FaFilter className="size-6" />
					</button>

					<Menu openMenu={openMenu} closeMenu={handleToggle}>
						<Filter setResult={setResult} />
					</Menu>
				</div>
				<HotelList hotels={filtered} />
			</section>
		</div>
	);
}

export { Home };
