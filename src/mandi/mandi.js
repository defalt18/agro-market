import React from 'react'
import Detail from './mandidetail'
function Mandi(mandi) {
	const [detail, setDetail] = React.useState(false)
	return (
		<div>
			<div
				onClick={() => {
					setDetail(!detail)
				}}
			>
				<li className='list-group-item'>
					<div className='media align-items-lg-center flex-column flex-lg-row p-3'>
						<div className='media-body order-2 order-lg-1'>
							<h5 className='mt-0 font-weight-bold mb-2'>{mandi.name}</h5>
							<p className='font-italic text-muted mb-0 small'>
								{mandi.wanted.map((item) => {
									return (
										<p>
											<em>{item.name}</em>
											<em>| Stock: {item.quantity}kg</em>
											<em>| Price: {item.price} per-kg</em>
										</p>
									)
								})}
							</p>
							<div className='d-flex align-items-center justify-content-between mt-1'>
								<h6 className='font-weight-bold my-2'>
									Rang of supply: {mandi.range}
								</h6>
							</div>
						</div>
					</div>
				</li>
			</div>
			{detail && <Detail {...mandi} />}
		</div>
	)
}

export default Mandi
