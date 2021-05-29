import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import {
	Home,
	Dashboard,
	Login,
	SignUp,
	Market,
	Mandis,
	Produce,
} from './pages'

function App() {
	const dispatch = useDispatch()
	const auth = useSelector((state) => state.auth)

	return (
		<div>
			<Router>
				<Header />
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route exact path={'/registration'} component={SignUp} />
					<Route exact path={'/login'} component={Login} />
					<Route exact path={'/dashboard'} component={Dashboard} />
					<Route exact path={'/market'} component={Market} />
					<Route exact path={'/mandis'} component={Mandis} />
					<Route exact path={'/produce'} component={Produce} />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App
