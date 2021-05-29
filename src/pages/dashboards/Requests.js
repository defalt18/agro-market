import React from 'react'

function Requests(props) {
	return (
		<div className='card w-100'>
			<h5 className='card-header'>Mandi Name <span className='badge badge-success'>Mandi</span></h5>
			<div className='card-body'>
				<h5 className='card-title'>Wheat <span className='badge badge-dark'>200 kg</span> @ <span className='badge badge-info'>$20 per kg</span></h5>
				<p className='card-text'>
					Mandi or Buyer has requested this from you!
				</p>
				<a href='#' className='btn btn-primary'>
					Accept Request & Confirm Delivery
				</a>
			</div>
		</div>
	)
}

export default Requests
