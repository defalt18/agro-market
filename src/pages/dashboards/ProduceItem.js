import React from 'react'
import produceImage from '../../images/produce_image.jpeg'

const styles = {
	produceImage: {
		maxHeight: 200,
		objectFit: 'cover',
	},
}

export const ProduceItem = React.memo(({name,quantity,grade, price}) => {
	return (
		<div className='card w-100'>
			<img
				src={produceImage}
				className='card-img-top'
				style={styles.produceImage}
				alt='...'
			/>
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
			</div>
			<ul className='list-group list-group-flush'>
				<li className='list-group-item'>{quantity} in kq</li>
				<li className='list-group-item'>
					<h5 className='d-flex'>
						Rating :{' '}
						{Array(2)
							.fill()
							.map((_, i) => (
								<div className={'ml-2'}>⭐️</div>
							))}
					</h5>
				</li>
				<li className='list-group-item'>{grade}</li>
				<li className='list-group-item'>Minimum Price : {price}</li>
			</ul>
			<div className='card-body'>
				<a href='#' className='card-link'>
					Video Link
				</a>
			</div>
		</div>
	)
}
)