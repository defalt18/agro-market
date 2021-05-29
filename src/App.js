import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

import {Home , Dashboard, Login, SignUp, Market,Mandis,Produce} from './pages'

function App() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
