import React from 'react'

const styles = {
	div: {
		width: 'calc(50% - 10px)',
	},
}

function Listings(props) {
	return (
		<div className='card' style={styles.div}>
			<div className='card-header'>Product Name</div>
			<div className='card-body'>
				<h5 className='card-title'>
					Grade <span className='badge badge-primary'>A</span> @{' '}
					<span className='badge badge-success'>20 per kg</span>
				</h5>
				<p className='card-text'>No transportation included</p>
				<a href='#' className='btn btn-primary'>
					Update the price
				</a>
			</div>
		</div>
	)
}

export default Listings
