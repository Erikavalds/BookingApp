import { Route, Routes } from 'react-router';
import { Home, Details, Reservation, Login, Register } from '../app';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Protected from './Protected';
import Public from './Public';

function AppRouter() {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="/hotel/:id" element={<Details />} />
				<Route
					path="/reservations"
					element={
						<Protected>
							<Reservation />
						</Protected>
					}
				/>
			</Route>
			<Route
				element={
					<Public>
						<AuthLayout />
					</Public>
				}
			>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
			</Route>
		</Routes>
	);
}

export default AppRouter;
