import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router';

const schema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
});

function LoginForms() {
	const { login } = useAuth();
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(schema),
	});

	const onSubmit = (dataForm) => {
		login(dataForm);
		reset();
		navigate('/');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4">
				<label className="block font-semibold ">E-mail</label>
				<input
					type="email"
					className="input-form"
					placeholder="Type your email"
					{...register('email')}
				/>
				{errors.email && (
					<p className="error-validation my-4">{errors.email.message}</p>
				)}
			</div>
			<div className="mb-4">
				<label className="block font-semibold ">Password</label>
				<input
					type="password"
					className="input-form"
					placeholder="Type your password"
					{...register('password')}
				/>
				{errors.password && (
					<p className="error-validation my-4">{errors.password.message}</p>
				)}
			</div>
			<button className="btn w-full ">Sign in</button>
		</form>
	);
}

export default LoginForms;
