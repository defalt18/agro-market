import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<nav className='sticky-top navbar navbar-expand-lg navbar-dark bg-dark'>
			<Link className='navbar-brand' to='/'>
				Agro Market
			</Link>
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
						<Link to='/' className='nav-link'>
							Home <span className='sr-only'>(current)</span>
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/mandis' className='nav-link'>
							Mandis
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/market' className='nav-link'>
							Open Market
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/produce' className='nav-link'>
							Produce
						</Link>
					</li>
				</ul>
				<div className='form-inline my-2 my-lg-0'>
					<Link to='/login'>
						<button
							className='btn btn-outline-success my-2 my-sm-0'
							type='submit'
						>
							Login
						</button>
					</Link>
					<Link to='/registration'>
						<button
							className='btn btn-outline-success my-2 mx-2 my-sm-0'
							type='submit'
						>
							Signup
						</button>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Header
