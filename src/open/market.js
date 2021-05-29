import React from 'react'
import Buyer from './buyer'

const data = [
	{
		id: 0,
		name: 'Nilay',
		place: 'Surat',
		wanted: [
			{ id: 0, name: 'wheat', quantity: 500, price: 100 },
			{ id: 1, name: 'pulses', quantity: 100, price: 500 },
		],
		range: 100,
	},
	{
		id: 1,
		name: 'Ridham',
		place: 'Surat',
		wanted: [
			{ id: 0, name: 'fruits', quantity: 500, price: 200 },
			{ id: 1, name: 'veg', quantity: 300, price: 400 },
		],
		range: 100,
	},
	{
		id: 2,
		name: 'Manish',
		place: 'Gandhinagar',
		wanted: [
			{ id: 0, name: 'wheat', quantity: 600, price: 320 },
			{ id: 1, name: 'pulses', quantity: 700, price: 90 },
		],
		range: 90,
	},
	{
		id: 3,
		name: 'Raju',
		place: 'Tapi',
		wanted: [
			{ id: 0, name: 'hello', quantity: 400, price: 100 },
			{ id: 1, name: 'world', quantity: 100, price: 20 },
		],
		range: 30,
	},
	{
		id: 4,
		name: 'Ravi',
		place: 'Daman',
		wanted: [
			{ id: 0, name: 'wheat', quantity: 600, price: 100 },
			{ id: 1, name: 'pulses', quantity: 400, price: 100 },
		],
		range: 20,
	},
	{
		id: 5,
		name: 'Raj',
		place: 'Bhuj',
		wanted: [
			{ id: 0, name: 'NO', quantity: 700, price: 100 },
			{ id: 1, name: 'Yes', quantity: 800, price: 100 },
		],
		range: 10,
	},
]
function Market() {
	return (
		<div className='container py-5'>
			<div className='row text-center text-white mb-5'>
				<div className='col-lg-7 mx-auto'>
					<h1 className='display-4'>Mandi</h1>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-8 mx-auto'>
					<ul className='list-group shadow'>
						{data.map((item) => {
							return <Buyer key={item.id} id={item.id} {...item} />
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Market
