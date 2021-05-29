import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import { isUserLoggedIn } from "./actions";

import {
    Home,
    RenderDashboard,
    Login,
    SignUp,
    RenderMarket,
    Produce,
} from "./pages";
import PrivateRoute from "./helpers/privateRouter";

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
            <Header auth={auth} />
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>
                <PrivateRoute exact path={"/dashboard"}>
                    <RenderDashboard user={auth.user} />
                </PrivateRoute>
                <PrivateRoute exact path={"/markets"}>
                    <RenderMarket />
                </PrivateRoute>
                <PrivateRoute exact path={"/produce"}>
                    <Produce />
                </PrivateRoute>
                <Route exact path={"/registration"}>
                    <SignUp />
                </Route>
                <Route exact path={"/login"}>
                    <Login />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
