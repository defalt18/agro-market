import React from "react";
import { login } from "../../actions";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const Login = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);

    const [user, setUser] = React.useState({
        phone: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const user1 = { phone: user.phone, password: user.password };
        dispatch(login(user1));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUser((oldUser) => {
            return { ...oldUser, [name]: value };
        });
    };

    if (auth.authenticate) {
        return <Redirect to="/" />;
    }

    return (
        <div className="container h-100 p-5 bg-light">
            <div className="row h-100 justify-content-center align-items-center">
                <p className="display-4 registration__title">
                    Login
                    <p className="registration__desc">
                        New to the community?{" "}
                        <p className="font-weight-bold">Register Here</p>
                    </p>
                </p>
                <div className="col-10 col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row form-group ">
                            <label htmlFor="inputEmail4">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputEmail4"
                                name="phone"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Phone number"
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
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
