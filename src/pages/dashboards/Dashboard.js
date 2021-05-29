import React, { useState } from 'react'
import { Seller } from './Seller'
import { ProduceItem } from './ProduceItem'
import Requests from './Requests'

import avatar from '../../images/avatar_yello.png'

export const Dashboard = React.memo((props) => {
	const [page, setPage] = useState(0)

	return (
		<div className='dashboard'>
			<div className='jumbotron bg-light'>
				<h1 className='display-4'>Welcome {props.role}</h1>
				<p className='lead'>
					Let us first head to your profile to set up your basic account details
					involving produce you want to buy or sell.
				</p>
				<hr className='my-4' />
				<p>
					This will help us learn more about your needs and suggest good vendors
					& places for you
				</p>
				<a
					onClick={() => setPage(1)}
					className='btn btn-primary btn-lg'
					href='#profile'
					role='button'
				>
					Go to Profile
				</a>
			</div>

			<div className='dashboard__content'>
				<div className='sidebar'>
					<div className='d-flex flex-column align-items-center bg-light py-3 details'>
						<img
							src={avatar}
							alt='Avatar'
							className='md-avatar rounded avatar'
						/>
						<h6>Name</h6>
						<p className='badge badge-success'>{props.role}</p>
						<h6>Contact</h6>
					</div>
					<h5
						onClick={() => {
							setPage(0)
						}}
						className={`sidebar__element ${
							page === 0 ? 'selected' : null
						} py-2`}
					>
						Feed
					</h5>
					<h5
						onClick={() => {
							setPage(1)
						}}
						className={`sidebar__element ${
							page === 1 ? 'selected' : null
						} py-2`}
					>
						Profile
					</h5>
					<h5
						onClick={() => {
							setPage(2)
						}}
						className={`sidebar__element ${
							page === 2 ? 'selected' : null
						} py-2`}
					>
						Produce
					</h5>
					<h5
						onClick={() => {
							setPage(3)
						}}
						className={`sidebar__element ${
							page === 3 ? 'selected' : null
						} py-2`}
					>
						Requests
					</h5>
					<h5 className='sidebar__element py-2'>
						<a href='/'>Logout</a>
					</h5>
				</div>
				{page === 0 ? (
					<div className='feed'>
						<Seller />
						<Seller />
						<Seller />
						<Seller />
						<Seller />
					</div>
				) : null}
				{page === 1 ? (
					<div id='profile' className='profile'>
						<img
							src={avatar}
							alt='Avatar'
							className='md-avatar rounded avatar'
						/>
						<h2>
							<span className='badge badge-primary'>{props.role}</span>
							<br />
						</h2>
						<h4 className='d-flex'>
							Rating :{' '}
							{Array(2)
								.fill()
								.map((_, i) => (
									<div className={'ml-2'}>⭐️</div>
								))}
						</h4>
						<div className='accordion w-100' id='accordionExample'>
							<div className='card'>
								<div className='card-header' id='headingOne'>
									<h5 className='mb-0'>
										<button
											className='btn btn-link'
											type='button'
											data-toggle='collapse'
											data-target='#collapseOne'
											aria-expanded='true'
											aria-controls='collapseOne'
										>
											Personal Details
										</button>
									</h5>
								</div>

								<div
									id='collapseOne'
									className='collapse show'
									aria-labelledby='headingOne'
									data-parent='#accordionExample'
								>
									<div className='card-body'>
										<div className='d-flex'>
											<div className='w-50'>
												<div className='flex__div'>
													<h6 className='text-primary'>First Name : </h6>
													<h5>Candice</h5>
												</div>
												<div className='flex__div'>
													<h6 className='text-primary'>Last Name : </h6>
													<h5>King</h5>
												</div>
												<div className='flex__div'>
													<h6 className='text-primary'>Gender : </h6>
													<h5>Female</h5>
												</div>
											</div>
											<div className='w-50'>
												<div className='flex__div'>
													<h6 className='text-primary'>State : </h6>
													<h5>East Lansing</h5>
												</div>
												<div className='flex__div'>
													<h6 className='text-primary'>City : </h6>
													<h5>Michigan</h5>
												</div>
												<div className='flex__div'>
													<h6 className='text-primary'>Phone : </h6>
													<h5>9435354542</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='card'>
								<div className='card-header' id='headingTwo'>
									<h5 className='mb-0'>
										<button
											className='btn btn-link collapsed'
											type='button'
											data-toggle='collapse'
											data-target='#collapseTwo'
											aria-expanded='false'
											aria-controls='collapseTwo'
										>
											Identification Details
										</button>
									</h5>
								</div>
								<div
									id='collapseTwo'
									className='collapse'
									aria-labelledby='headingTwo'
									data-parent='#accordionExample'
								>
									<div className='card-body'>
										<div className='flex__div'>
											<h6>Aadhar : </h6>
											<h5>9345 3459 4353</h5>
										</div>
										<div className='flex__div'>
											<h6>Ration Card : </h6>
											<h5>9345 3459 4353</h5>
										</div>
										<div className='flex__div'>
											<h6>PAN : </h6>
											<h5>9345 3459 4353</h5>
										</div>
									</div>
								</div>
							</div>
							<div className='card'>
								<div className='card-header' id='headingThree'>
									<h5 className='mb-0'>
										<button
											className='btn btn-link collapsed'
											type='button'
											data-toggle='collapse'
											data-target='#collapseThree'
											aria-expanded='false'
											aria-controls='collapseThree'
										>
											Produce Type
										</button>
									</h5>
								</div>
								<div
									id='collapseThree'
									className='collapse'
									aria-labelledby='headingThree'
									data-parent='#accordionExample'
								>
									<div className='card-body'>
										<h5>Wheat</h5>
										<h5>Rice</h5>
										<h5>Bajra</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : null}

				{page === 2 ? (
					<div className='produce'>
						<button className={'btn btn-primary'}> + Add Produce Stock</button>
						<ProduceItem />
						<ProduceItem />
						<ProduceItem />
						<ProduceItem />
					</div>
				) : null}

				{page === 3 ? (
					<div className='produce'>
						<Requests />
						<Requests />
						<Requests />
						<Requests />
					</div>
				) : null}
			</div>
		</div>
	)
})
