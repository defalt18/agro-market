import React from 'react'

import picture_1 from '../../images/farmer_1.jpeg'
import picture_2 from '../../images/farmer_2.jpeg'
import picture_3 from '../../images/farmer_3.jpeg'

const Carousel = () => {
	return (
		<div
			id='carouselExampleControls'
			className='carousel slide'
			data-ride='carousel'
		>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img className='d-block w-100' src={picture_1} alt='First slide' />
				</div>
				<div className='carousel-item'>
					<img className='d-block w-100' src={picture_2} alt='Second slide' />
				</div>
				<div className='carousel-item'>
					<img className='d-block w-100' src={picture_3} alt='Third slide' />
				</div>
			</div>
			<a
				className='carousel-control-prev'
				href='#carouselExampleControls'
				role='button'
				data-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</a>
			<a
				className='carousel-control-next'
				href='#carouselExampleControls'
				role='button'
				data-slide='next'
			>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</a>
		</div>
	)
}
export default Carousel
