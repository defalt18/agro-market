import React from 'react'

function ConfirmOrders(props) {
	return (
		<div className='card w-100'>
			<div className='card-body'>
				<h5 className='card-title'>Potato , 200 Kg</h5>
				<h6 className='card-subtitle mb-2 text-muted'>Farmer Name, Place</h6>
				<p className='card-text'>
					<h5>
						Grade Type :{' '}
						<span className='badge bg-secondary' style={{ color: 'white' }}>
							A
						</span>
					</h5>
					<h5>
						Price :{' '}
						<span className='badge bg-primary' style={{ color: 'white' }}>
							30 per kg
						</span>
						<span className='badge bg-info ml-2' style={{ color: 'white' }}>
							Transportation not included
						</span>
					</h5>
				</p>
				<a className='card-link'>
					{'<'}Contact Number{'>'}
				</a>
				<h3>
					<span className='badge bg-secondary' style={{ color: 'white' }}>
						Confirmed
					</span>
				</h3>
			</div>
		</div>
	)
}

export default ConfirmOrders
