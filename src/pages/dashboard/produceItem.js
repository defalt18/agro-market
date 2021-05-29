import React from 'react'

export const ProduceItem = (props) => {
	return (
		<div className='card w-100'>
			<img src='' className='card-img-top' alt='...' />
			<div className='card-body'>
				<h5 className='card-title'>Produce Name</h5>
				<p className='card-text'>
					Specification regarding the produce and expiration dates
				</p>
			</div>
			<ul className='list-group list-group-flush'>
				<li className='list-group-item'>Quantity</li>
				<li className='list-group-item'>Quality</li>
				<li className='list-group-item'>Wanted Price</li>
			</ul>
			<div className='card-body'>
				<a href='#' className='card-link'>
					Card link
				</a>
				<a href='#' className='card-link'>
					Another link
				</a>
			</div>
		</div>
	)
}
