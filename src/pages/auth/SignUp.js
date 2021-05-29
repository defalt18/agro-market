import React from "react";
import { signup } from "../../actions";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const SignUp = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const userf = useSelector((state) => state.user);

    const [user, setUser] = React.useState({
        role: "farmer",
        fullName: "",
        email: "",
        contactNumber: "",
        password: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const user1 = {
            role: user.role,
            fullName: user.fullName,
            email: user.email,
            contactNumber: user.contactNumber,
            password: user.password,
            address: user.address,
            city: user.city,
            state: user.state,
            pincode: user.pincode,
        };
        dispatch(signup(user1));
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

    if (userf.loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="container m-20 py-5 px-5 bg-light">
            <div className="row justify-content-center align-items-center">
                <p className="display-3 registration__title">
                    Registration
                    <p className="registration__desc">
                        Register as a farmer , mandi or an open buyer and get
                        access to all the commodity information available to us.{" "}
                        <br />
                        Negotiate deals and fix appointments as per your
                        comforts.
                    </p>
                </p>
                <div className="col-10 col-md-8 col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row form-group ">
                            <label htmlFor="inputUsername">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputUsername"
                                name="userid"
                                value={user.userid}
                                onChange={handleChange}
                                placeholder="Username"
                            />
                        </div>

                        <div className="form-row form-group ">
                            <label htmlFor="inputEmail4">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-row form-group ">
                            <label htmlFor="inputName">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                placeholder="Enter Your Name"
                            />
                        </div>
                        <div className="form-row form-group ">
                            <label
                                className="my-1 mr-2"
                                htmlFor="inlineFormCustomSelectPref"
                            >
                                Role
                            </label>
                            <select
                                className="custom-select my-1 mr-sm-2"
                                id="inlineFormCustomSelectPref"
                                name="role"
                                value={user.role}
                                onChange={handleChange}
                            >
                                <option defaultValue>Choose...</option>
                                <option value="Farmer">Farmer</option>
                                <option value="Mandi">Mandi</option>
                                <option value="Businessman">Open Buyer</option>
                            </select>
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
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
