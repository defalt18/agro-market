import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	const [page, setPage] = useState(0)

	return (
		<nav className='sticky-top navbar navbar-expand-lg navbar-dark bg-dark'>
			<Link onClick={() => setPage(0)} className='navbar-brand' to='/'>
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
					<li
						onClick={() => setPage(0)}
						className={`nav-item ${page === 0 ? 'active' : null}`}
					>
						<Link to='/' className='nav-link'>
							Home <span className='sr-only'>(current)</span>
						</Link>
					</li>
					<li
						onClick={() => setPage(2)}
						className={`nav-item ${page === 2 ? 'active' : null}`}
					>
						<Link to='/markets' className='nav-link'>
							Markets
						</Link>
					</li>
					<li
						onClick={() => setPage(3)}
						className={`nav-item ${page === 3 ? 'active' : null}`}
					>
						<Link to='/produce' className='nav-link'>
							Produce
						</Link>
					</li>
				</ul>
				<div className='form-inline my-2 my-lg-0'>
					<Link to='/login'>
						<button
							onClick={() => setPage(4)}
							className='btn btn-outline-success my-2 my-sm-0'
							type='submit'
						>
							Login
						</button>
					</Link>
					<Link to='/registration'>
						<button
							onClick={() => setPage(5)}
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
