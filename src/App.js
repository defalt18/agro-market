import "./App.css";
import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    return (
        <div className="App">
            <Switch>
                <Header />
                <Home />
                <Footer />
            </Switch>
        </div>
    );
}

export default App;
