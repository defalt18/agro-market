import React from 'react'

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
						New to the community? <p className="font-weight-bold">Register Here</p>
					</p>
				</p>
				<div className='col-10 col-md-8 col-lg-6'>
					<form onSubmit={handleSubmit}>
						<div className='form-row form-group '>
							<label htmlFor='inputEmail4'>Email</label>
							<input
								type='email'
								className='form-control'
								id='inputEmail4'
								name='email'
								value={user.email}
								onChange={handleChange}
								placeholder='Email'
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
						<button type='submit' className='btn btn-primary'>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
