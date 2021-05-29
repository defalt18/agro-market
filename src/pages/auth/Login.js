import React from "react";
import { Link } from "react-router-dom";
import { login } from "../../actions";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const Login = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const [user, setUser] = React.useState({
        contactNumber: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const user1 = {
            contactNumber: user.contactNumber,
            password: user.password,
        };
        console.log("call disptch");
        dispatch(login(user1));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((oldUser) => {
            return { ...oldUser, [name]: value };
        });
    };

    if (auth.authenticate) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div className="container h-100 p-5 bg-light">
            <div className="row h-100 justify-content-center align-items-center">
                <p className="display-4 registration__title">
                    Login
                    <p className="registration__desc">
                        New to the community?{" "}
                        <a href="/registration" className="font-weight-bold">
                            Register Here
                        </a>
                    </p>
                </p>
                <div className="col-10 col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row form-group ">
                            <label htmlFor="inputEmail4">Contact Number</label>
                            <input
                                type="number"
                                className="form-control"
                                id="inputEmail4"
                                name="contactNumber"
                                value={user.contactNumber}
                                onChange={handleChange}
                                placeholder="Contact Number"
                            />
                        </div>

                        <div className="form-row form-group ">
                            <label htmlFor="inputPassword4">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword4"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                        </div>
                        <Link to="/dashboard">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="btn btn-primary"
                            >
                                Login
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
