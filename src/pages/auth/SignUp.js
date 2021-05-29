import React from 'react'

export const SignUp = () => {
	const [user, setUser] = React.useState({
		userid: '',
		email: '',
		name: '',
		role: '',
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
		<div className='container m-20 py-5 px-5 bg-light'>
			<div className='row justify-content-center align-items-center'>
				<p className='display-3 registration__title'>
					Registration
					<p className='registration__desc'>
						Register as a farmer , mandi or an open buyer and get access to all
						the commodity information available to us. <br/>Negotiate deals and fix
						appointments as per your comforts.
					</p>
				</p>
				<div className='col-10 col-md-8 col-lg-6'>
					<form onSubmit={handleSubmit}>
						<div className='form-row form-group '>
							<label htmlFor='inputUsername'>Username</label>
							<input
								type='text'
								className='form-control'
								id='inputUsername'
								name='userid'
								value={user.userid}
								onChange={handleChange}
								placeholder='Username'
							/>
						</div>

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
							<label htmlFor='inputName'>Name</label>
							<input
								type='text'
								className='form-control'
								id='inputName'
								name='name'
								value={user.name}
								onChange={handleChange}
								placeholder='Enter Your Name'
							/>
						</div>
						<div className='form-row form-group '>
							<label className='my-1 mr-2' htmlFor='inlineFormCustomSelectPref'>
								Role
							</label>
							<select
								className='custom-select my-1 mr-sm-2'
								id='inlineFormCustomSelectPref'
								name='role'
								value={user.role}
								onChange={handleChange}
							>
								<option defaultValue>Choose...</option>
								<option value='Farmer'>Farmer</option>
								<option value='Mandi'>Mandi</option>
								<option value='Businessman'>Open Buyer</option>
							</select>
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
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
