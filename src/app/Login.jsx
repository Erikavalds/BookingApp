import { Link } from 'react-router';
import LoginForms from '../components/auth/LoginForms';

function Login() {
	return (
		<div>
			<h1 className="text-lg font-semibold mb-6">Sign in with your account</h1>

			<LoginForms />
			<p>
				Do you need an account?{' '}
				<Link to="/register" className="text-blue-500 font-semibold">
					Create an account
				</Link>
			</p>
		</div>
	);
}

export { Login };
