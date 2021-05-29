import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import { isUserLoggedIn } from "./actions";
import {
    Home,
    Dashboard,
    Login,
    SignUp,
    Market,
    Mandis,
    Produce,
} from "./pages";
import PrivateRoute from "./helpers/privateRoute";

function App() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (!auth.authenticated) {
            dispatch(isUserLoggedIn());
        }
    }, []);

    return (
        <div>
            <Header />

            <Switch>
                <PrivateRoute exact path={"/"} component={Home} />
                <PrivateRoute exact path={"/dashboard"} component={Dashboard} />
                <PrivateRoute exact path={"/market"} component={Market} />
                <PrivateRoute exact path={"/mandis"} component={Mandis} />
                <PrivateRoute exact path={"/produce"} component={Produce} />
                <Route exact path={"/registration"} component={SignUp} />
                <Route exact path={"/login"} component={Login} />
            </Switch>

            <Footer />
        </div>
    );
}

export default App;
