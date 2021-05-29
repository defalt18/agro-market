import React from 'react'
import produceImage from '../../images/produce_image.jpeg'

const styles = {
	produceImage: {
		maxWidth: 250,
		minHeight: '100%',
		objectFit: 'cover',
	},
}

function FarmerCard(props) {
	return (
		<div className='card mb-3 w-100'>
			<div className='row g-0'>
				<div className='col-md-4'>
					<img style={styles.produceImage} src={produceImage} alt='...' />
				</div>
				<div className='col-md-8'>
					<div className='card-body'>
						<h5 className='card-title'>Wheat 200 kg</h5>
						<p className='card-text'>
							<h5>
								Grade{' '}
								<span className='badge bg-secondary' style={{ color: 'white' }}>
									A
								</span>
							</h5>
							<h5>
								Minimum price wanted{' '}
								<span className='badge bg-success' style={{ color: 'white' }}>
									$35 per kg
								</span>
							</h5>
						</p>
						<p className='card-text'>
							<small className='text-muted'>Name : Shyam Raj</small>
							<br />
							<small className='text-muted'>Place : Gurugram</small>
							<br />
							<small className='text-muted'>Contact Number : 9232903392</small>
						</p>
						<div className='d-flex align-items-center'>
							<button type='button' className='btn btn-info'>
								Buy
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FarmerCard
