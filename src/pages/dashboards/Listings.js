import React from 'react'
import UpdateListing from "../../components/Modal/UpdateListing";

const styles = {
	div: {
		width: 'calc(50% - 10px)',
	},
}

const Listings = React.memo(({id, name, quantity, grade, price}) => {
	return (
		<div className='card' style={styles.div}>
			<div className='card-header'>{name}</div>
			<div className='card-body'>
				<h5 className='card-title'>
					Grade <span className='badge badge-primary'>{grade}</span> @{' '}
					<span className='badge badge-success'>{price} per kg</span>
				</h5>
				<p className='card-text'>Quantity : {quantity}</p>
				{/* <a href='#' className='btn btn-primary'>
					Update the price
				</a> */}
				<UpdateListing id={id}/>
			</div>
		</div>
	)
})

export default Listings
