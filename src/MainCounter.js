import React, { useState } from 'react'

const MainCounter = () => {

	const [resetCount, setResetCount] = useState(0)

	const handleResetCount = () => {
		setResetCount(resetCount + 1)
	}

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<h3>Main Counter</h3>
						<p>All counters have been reset {resetCount} time(s).</p>
					</div>
					<div>
					</div>
				</div>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-xs-12 col-sm-4'>
						counter 1
					</div>
					<div className='col-xs-12 col-sm-4'>
						counter 2
					</div>
					<div className='col-xs-12 col-sm-4'>
						counter 3
					</div>
				</div>
			</div>
		</>
	)
}

export default MainCounter