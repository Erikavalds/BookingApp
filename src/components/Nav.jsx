import { Link } from 'react-router';
import { useAuth } from '../context/auth';

function Nav() {
	const { isAuth, logout } = useAuth();

	return (
		<div className="grid place-content-center py-5">
			<div className="flex flex-col md:flex-row items-center gap-6">
				{isAuth ? (
					<>
						<Link to="/reservation" className="nav-link">
							Reservations
						</Link>
						<button className="btn bg-red-500" onClick={logout}>
							Logout
						</button>
					</>
				) : (
					<>
						<Link to="/register" className="nav-link">
							Sign in
						</Link>
						<Link to="/login" className="nav-link">
							Login
						</Link>
					</>
				)}
			</div>
		</div>
	);
}

export default Nav;
