import React from 'react'

function Detail(mandi) {
	return (
		<div>
			<div className='container' id='main'>
				<div className='row'>
					<div className=' col-sm-8' id='detail'>
						<h1 id='shawn'>
							<b>{mandi.name}</b>
						</h1>
					</div>
				</div>
				<table className='table'>
					<thead>
						<tr>
							<td>#</td>
							<td>Product</td>
							<td>Total Stock</td>
							<td>Price</td>
						</tr>
					</thead>
					<tbody>
						{mandi.wanted.map((item, index) => {
							return (
								<tr>
									<td>{index}</td>
									<td>{item.name}</td>
									<td>{item.quantity}</td>
									<td>{item.price}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Detail
