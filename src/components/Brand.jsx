import { Link } from 'react-router';
import Logo from './Logo';

function Brand() {
	return (
		<Link to={'/'} className="flex items-center gap-2">
			<Logo
				className="size-10"
				colors={{
					homeBack: 'fill-emerald-200',
					homeFront: 'fill-emerald-200',
					check: 'fill-white',
				}}
			/>
			<span className="text-2xl font-semibold text-blue-500">
				Booking <span className="text-emerald-400">App</span>
			</span>
		</Link>
	);
}

export default Brand;
