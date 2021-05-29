import React from 'react'

const Header = () => {
	return (
		<nav className='sticky-top navbar navbar-expand-lg navbar-dark bg-dark'>
			<a className='navbar-brand' href='/'>
				Agro Market
			</a>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarSupportedContent'
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
			>
				<span className='navbar-toggler-icon'></span>
			</button>

			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<a href='/' className='nav-link'>
							Home <span className='sr-only'>(current)</span>
						</a>
					</li>
					<li className='nav-item'>
						<a href='/mandis' className='nav-link'>Mandis</a>
					</li>
					<li className='nav-item'>
						<a href='/market' className='nav-link'>Open Market</a>
					</li>
					<li className='nav-item'>
						<a href='/produce' className='nav-link'>Produce</a>
					</li>
				</ul>
				<div className='form-inline my-2 my-lg-0'>
					<a href='/login'>
						<button
							className='btn btn-outline-success my-2 my-sm-0'
							type='submit'
						>
							Login
						</button>
					</a>
					<a href='/registration'>
						<button
							className='btn btn-outline-success my-2 mx-2 my-sm-0'
							type='submit'
						>
							Signup
						</button>
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Header
