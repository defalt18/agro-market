import React from "react";
import { Link } from "react-router-dom";
import { Redirect, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signup } from "../../actions";

function phonenumber(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputtxt.match(phoneno)) {
        return true;
    } else {
        return false;
    }
}

export const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const auth = useSelector((state) => state.auth);
    const userf = useSelector((state) => state.user);

    const [user, setUser] = React.useState({
        role: "farmer",
        fullName: "",
        contactNumber: "",
        password: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        coordinator : ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("signup called", user);
        if (
            user.contactNumber.length === 10 &&
            phonenumber(user.contactNumber)
        ) {
            const user1 = {
                role: user.role,
                fullName: user.fullName,
                contactNumber: user.contactNumber,
                password: user.password,
                address: user.address,
                city: user.city,
                state: user.state,
                contactPersonName : user.coordinator,
                pincode: user.pincode,
            };
            dispatch(signup(user1)).then(() => history.push("/login"));
        } else alert("Invalid Phone Number");
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
                                <option value="farmer">Farmer</option>
                                <option value="mandi">Mandi</option>
                                <option value="market">Open Buyer</option>
                            </select>
                        </div>

                        <div className="form-row form-group ">
                            <label htmlFor="inputEmail4">Phone Number</label>
                            <input
                                type="number"
                                className="form-control"
                                id="contactNumber"
                                name="contactNumber"
                                value={user.contactNumber}
                                onChange={handleChange}
                                placeholder="Contact Number"
                            />
                        </div>
                        <div className="form-row form-group ">
                            <label htmlFor="inputName">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                name="fullName"
                                value={user.fullName}
                                onChange={handleChange}
                                placeholder="Enter Your Name"
                            />
                        </div>
                        {
                            user.role !== "farmer" &&
                        <div className="form-row form-group ">
                            <label htmlFor="inputName">Coordinator Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                name="coordinator"
                                value={user.coordinator}
                                onChange={handleChange}
                                placeholder="Enter Your Coordinator Name"
                                />
                        </div>
                            }
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
                        <div className="form-row form-group ">
                            <label htmlFor="inputPassword4">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={user.address}
                                onChange={handleChange}
                                placeholder="State"
                            />
                        </div>
                        <div className="form-row form-group ">
                            <label htmlFor="inputPassword4">State</label>
                            <input
                                type="text"
                                className="form-control"
                                id="state"
                                name="state"
                                value={user.state}
                                onChange={handleChange}
                                placeholder="State"
                            />
                        </div>
                        <div className="form-row form-group ">
                            <label htmlFor="inputPassword4">City</label>
                            <input
                                type="text"
                                className="form-control"
                                id="city"
                                name="city"
                                value={user.city}
                                onChange={handleChange}
                                placeholder="City"
                            />
                        </div>
                        <div className="form-row form-group ">
                            <label htmlFor="inputPassword4">Pincode</label>
                            <input
                                type="number"
                                className="form-control"
                                id="pincode"
                                name="pincode"
                                value={user.pincode}
                                onChange={handleChange}
                                placeholder="Pincode"
                            />
                        </div>
                        <Link to={"/dashboard"}>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="btn btn-primary"
                            >
                                Register
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
