import React, { useState } from 'react'
import { Dashboard } from './Dashboard'
import { OpenDashboard } from './OpenDashboard'
import MandiDashboard from "./MandiDashboard";

export function RenderDashboard(props) {
	const [role, setRole] = useState('market')

	return (
		<>
			{role === 'farmer' ? <Dashboard role={role} /> : null}
			{role === 'mandi' ? <MandiDashboard role={role} /> : null}
			{role === 'market' ? <OpenDashboard role={role} /> : null}
		</>
	)
}
