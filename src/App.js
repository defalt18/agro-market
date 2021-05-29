import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Switch, Route } from 'react-router-dom'

import {Home , Dashboard, Login, SignUp} from './pages'

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path={'/'} component={Home} />
				<Route exact path={'/registration'} component={SignUp} />
				<Route exact path={'/login'} component={Login} />
				<Route exact path={'/dashboard'} component={Dashboard} />
			</Switch>
			<Footer />
		</div>
	)
}

export default App
