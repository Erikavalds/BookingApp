import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router';

const schema = z.object({
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(6),
	gender: z.enum(['male', 'female', 'other'], { message: 'Select a gender' }),
});

function RegisterForm() {
	const { register: createUser } = useAuth();
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
		createUser(dataForm);
		reset();
		navigate('/login');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-4 ">
				<label className="block font-semibold ">First Name</label>
				<input
					type="text"
					className="input-form"
					placeholder="Type your name"
					{...register('firstName')}
				/>
				{errors.firstName && (
					<p className="error-validation my-4">{errors.firstName.message}</p>
				)}
			</div>
			<div className="mb-4 ">
				<label className="block font-semibold ">Last Name</label>
				<input
					type="text"
					className="input-form"
					placeholder="Type your last name"
					{...register('firstName')}
				/>
				{errors.lastName && (
					<p className="error-validation my-4">{errors.lastName.message}</p>
				)}
			</div>
			<div className="mb-4 ">
				<label className="block font-semibold ">E-mail</label>
				<input
					type="email"
					className="input-form"
					placeholder="Type your email"
					{...register('firstName')}
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
			<div className="mb-4">
				<label className="block font-semibold ">Gender</label>
				<select className="input-form" {...register('gender')}>
					<option value="">Select a genre</option>
					<option value="male">Male</option>
					<option value="female">Female</option>
					<option value="other">Other</option>
				</select>
				{errors.password && (
					<p className="error-validation my-4">{errors.password.message}</p>
				)}
			</div>
			<button className="btn w-full ">Create an account</button>
		</form>
	);
}

export default RegisterForm;
