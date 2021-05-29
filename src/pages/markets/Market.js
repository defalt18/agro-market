import React, { useState } from 'react'
import { Mandis } from '../mandi'
import { Market } from '../open'

export const RenderMarket = (props) => {
	const [page, setPage] = useState(0)

	return (
		<>
			<div className={'d-flex w-100 justify-content-center mt-5'}>
				<button onClick={() => setPage(0)} className={'btn btn-primary'}>
					Show Mandis
				</button>
				<button onClick={() => setPage(1)} className={'btn btn-primary ml-2'}>
					Show Private Establishments
				</button>
			</div>
			{page === 0 ? <Mandis /> : <Market />}
		</>
	)
}
