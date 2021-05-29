import React from 'react'

export const Seller = () => {
	return (
		<div className='card w-100'>
			<div className='card-body'>
				<h5 className='card-title'>Potato , 200 Kg</h5>
				<h6 className='card-subtitle mb-2 text-muted'>Mandi Name, Place</h6>
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
				<span>
					<br/>
					<button className={'btn btn-success mt-2'}>Accept and confirm</button>
				</span>
			</div>
		</div>
	)
}
