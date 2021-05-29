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
			<div className='row'>
				<div className='col-sm-8' id='detail'>
					<h1 id='shawn'>
						<b>List of Product</b>
					</h1>
				</div>
				{data.map((item) => {
					return <Product key={item.id} {...item} />
				})}
			</div>
		</div>
	)
}
