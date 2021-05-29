import React from 'react'
import Product from './product'

const data = [
	{
		id: 0,
		name: 'Nilay',
		quantity: 35,
		price: 200,
	},
	{
		id: 1,
		name: 'Nilay',
		quantity: 35,
		price: 200,
	},
	{
		id: 2,
		name: 'Nilay',
		quantity: 35,
		price: 200,
	},
	{
		id: 3,
		name: 'Nilay',
		quantity: 35,
		price: 200,
	},
	{
		id: 4,
		name: 'Nilay',
		quantity: 35,
		price: 200,
	},
]

export function Produce() {
	return (
		<div className='container' id='main'>
			<div className={'d-flex justify-content-center my-5'}>
				<h1 className={'display-4 text-align-center'}>List of products</h1>
			</div>

			<div className={'d-flex justify-content-center'}>
				<table className='table w-60'>
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Crop Name</th>
							<th scope='col'>Grade</th>
							<th scope='col'>Quantity (in kq)</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<tr>
								<th scope='row'>{item.id}</th>
								<td>Wheat</td>
								<td>A</td>
								<td>500</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
