import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
	const [user, setUser] = React.useState({
		email: '',
		password: '',
	})
	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleChange = (e) => {
		const { name, value } = e.target

		setUser((oldUser) => {
			return { ...oldUser, [name]: value }
		})
	}

	return (
		<div className='container h-100 p-5 bg-light'>
			<div className='row h-100 justify-content-center align-items-center'>
				<p className='display-4 registration__title'>
					Login
					<p className='registration__desc'>
						New to the community?{' '}
						<a href='/registration' className='font-weight-bold'>Register Here</a>
					</p>
				</p>
				<div className='col-10 col-md-8 col-lg-6'>
					<form onSubmit={handleSubmit}>
						<div className='form-row form-group '>
							<label htmlFor='inputEmail4'>Phone Number</label>
							<input
								type='number'
								className='form-control'
								id='inputEmail4'
								name='phone'
								value={user.email}
								onChange={handleChange}
								placeholder='Contact Number'
							/>
						</div>

						<div className='form-row form-group '>
							<label htmlFor='inputPassword4'>Password</label>
							<input
								type='password'
								className='form-control'
								id='inputPassword4'
								name='password'
								value={user.password}
								onChange={handleChange}
								placeholder='Password'
							/>
						</div>
						<Link to='/dashboard'>
							<button type='submit' className='btn btn-primary'>
								Login
							</button>
						</Link>
					</form>
				</div>
			</div>
		</div>
	)
}
