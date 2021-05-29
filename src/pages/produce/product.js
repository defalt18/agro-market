import React from 'react'

function Product(data) {
	return (
		<div className='container py-5'>
			<div className='row'>
				<div className='col-lg-8 mx-auto'>
					<ul className='list-group shadow'>
						<table className='table'>
							<thead>
								<tr>
									<td>#</td>
									<td>Name</td>
									<td>Total Stock</td>
									<td>Price</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{data.id}</td>
									<td>{data.name}</td>
									<td>{data.quantity}</td>
									<td>{data.price}</td>
								</tr>
							</tbody>
						</table>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Product
