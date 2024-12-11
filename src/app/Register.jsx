import RegisterForm from '../components/auth/RegisterFroms';
import { Link } from 'react-router';

function Register() {
	return (
		<div>
			<h1 className="text-lg font-semibold mb-6">Create an account</h1>

			<RegisterForm />
			<p>
				Do you already have an account?{' '}
				<Link to="/login" className="text-blue-500 font-semibold">
					Sign in
				</Link>
			</p>
		</div>
	);
}

export { Register };
