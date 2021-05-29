import React from 'react'

import farmer from '../../images/farmer_featured.jpeg'
import mandis from '../../images/mandis.jpeg'
import business from '../../images/business.jpeg'

import Carousel from '../../components/Carousel'

const styles = {
	padView: { padding: '0 5%' },
	desc: {
		fontSize: 25,
		backgroundColor: '#f8f9fa',
		padding: 10,
	},
	features: {
		display: 'flex',
		width: '100%',
		gap: 20,
		padding: '0 20px',
	},
	featured: {
		maxHeight: 250,
		objectFit: 'cover',
	},
	featureList: {
		marginBottom: 50,
	},
}

const Home = () => {
	return (
		<div>
			<div className='d-flex align-items-center'>
				<div className='w-50' style={styles.padView}>
					<h1 className='display-2 font-weight-bold'># Agro Market</h1>
					<p style={styles.desc}>
						A place where a farmer can connect to his buyer and sell his produce
						as efficiently as possible relieving him of any hassle or long
						queues
					</p>
				</div>
				<div className='w-50'>
					<Carousel />
				</div>
			</div>
			<div className='d-flex flex-column mb-50' style={styles.featureList}>
				<div className='w-100 p-3'>
					<h2 className='display-5 font-weight-bold text-center'>
						We look for people in need
					</h2>
				</div>
				<div style={styles.features}>
					<div className='card'>
						<img style={styles.featured} src={farmer} alt='Card image cap' />
						<div className='card-body'>
							<h5 className='card-title'>Farmers</h5>
							<p className='card-text'>
								Farmers cultivate their produce to sell in a competitive market
								to either mandis or other buyers. They decide what minimum price
								do they want for their produce
							</p>
							<a href='#' className='btn btn-primary'>
								Check Out Farmers
							</a>
						</div>
					</div>
					<div className='card'>
						<img style={styles.featured} src={mandis} alt='Card image cap' />
						<div className='card-body'>
							<h5 className='card-title'>Mandis</h5>
							<p className='card-text'>
								Mandis consists of a network of small marketplaces distributed
								all over India. Farmers can sell their produce to whatever price
								they find suitable
							</p>
							<a href='#' className='btn btn-primary'>
								Check out Mandis
							</a>
						</div>
					</div>
					<div className='card'>
						<img style={styles.featured} src={business} alt='Card image cap' />
						<div className='card-body'>
							<h5 className='card-title'>Open Buyers</h5>
							<p className='card-text'>
								When mandis fill up farmers can also turn to these buyers which
								buy according to their needs. They can offer a special price
								either greater than or equal to minimum price put down by a
								farmer
							</p>
							<a href='#' className='btn btn-primary'>
								Check out other buyers
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
