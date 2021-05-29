import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Switch, Route } from 'react-router-dom'

import {
	Home,
	RenderDashboard,
	Login,
	SignUp,
	RenderMarket,
	Produce,
} from './pages'

function App() {
	const dispatch = useDispatch()
	const auth = useSelector((state) => state.auth)

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path={'/'} component={Home} />
				<Route exact path={'/registration'} component={SignUp} />
				<Route exact path={'/login'} component={Login} />
				<Route exact path={'/dashboard'} component={RenderDashboard} />
				<Route exact path={'/markets'} component={RenderMarket} />
				<Route exact path={'/produce'} component={Produce} />
			</Switch>
			<Footer />
		</div>
	)
}

export default App
