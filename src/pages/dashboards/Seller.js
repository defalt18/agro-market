import React from 'react'

export const Seller = React.memo(({name, quantity, price, grade, mandi, state, contact, city}) => {
	return (
		<div className='card w-100'>
			<div className='card-body'>
				<h5 className='card-title'>{name} , {quantity} Kg</h5>
				<h6 className='card-subtitle mb-2 text-muted'>{mandi}, {city}, {state}</h6>
				<p className='card-text'>
					<h5>
						Grade Type :{' '}
						<span className='badge bg-secondary' style={{ color: 'white' }}>
							{grade}
						</span>
					</h5>
					<h5>
						Price :{' '}
						<span className='badge bg-primary' style={{ color: 'white' }}>
							{price} per kg
						</span>
						<span className='badge bg-info ml-2' style={{ color: 'white' }}>
							Transportation not included
						</span>
					</h5>
				</p>
				<a className='card-link'>
					{contact}
				</a>
				<span>
					<br/>
					<button className={'btn btn-success mt-2'}>Accept and confirm</button>
				</span>
			</div>
		</div>
	)
})
