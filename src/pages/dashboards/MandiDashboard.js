import React, { useState } from "react";
import avatar from "../../images/avatar_yello.png";
import FarmerCard from "./FarmerCard";
import ConfirmOrders from "./ConfirmOrders";
import Listings from "./Listings";
import Requests from "./Requests";
import AddListing from "../../components/Modal/AddListing";
import axios from "../../helpers/axios";

export default function MandiDashboard({ user }) {
    const [page, setPage] = useState(0);
	const [success, setSuccess] = useState(false);

	const [produceList, setProduceList] = useState([]);

    const callDb = async (id) => {
        await axios
            .get(`/product/user/${id}`)
            .then((res) => setProduceList(res.data.products))
            .catch((err) => console.error(err));
    };

    React.useEffect(() => {
        callDb(user._id);
    }, []);


    const SignOut = () => {
        localStorage.clear();
    };

    return (
        <div className="dashboard">
            <div className="jumbotron bg-light">
                ️<h1 className="display-4">Welcome {user.role} admin</h1>
                <p className="lead">
                    Let us first head to your profile to set up your basic
                    account details involving produce you want to buy or sell.
                </p>
                <hr className="my-4" />
                <p>
                    This will help us learn more about your needs and suggest
                    good vendors & places for you
                </p>
                <p
                    onClick={() => {
                        setPage(1);
                    }}
                    className="btn btn-primary btn-lg"
                    role="button"
                >
                    Go to Profile
                </p>
            </div>

            <div className="dashboard__content">
                <div className="sidebar">
                    <div className="d-flex flex-column align-items-center bg-light py-3 details">
                        <img
                            src={avatar}
                            alt="Avatar"
                            className="md-avatar rounded avatar"
                        />
                        <h6>{user.fullName}</h6>
                        <p className="badge badge-success">{user.role} admin</p>
                        <h6>{user.contactNumber}</h6>
                    </div>
                    <h5
                        onClick={() => {
                            setPage(0);
                        }}
                        className={`sidebar__element ${
                            page === 0 ? "selected" : null
                        } py-2`}
                    >
                        Requests
                    </h5>
                    <h5
                        onClick={() => {
                            setPage(1);
                        }}
                        className={`sidebar__element ${
                            page === 1 ? "selected" : null
                        } py-2`}
                    >
                        Profile
                    </h5>
                    <h5
                        onClick={() => {
                            setPage(2);
                        }}
                        className={`sidebar__element ${
                            page === 2 ? "selected" : null
                        } py-2`}
                    >
                        Orders
                    </h5>
                    <h5
                        onClick={() => {
                            setPage(3);
                        }}
                        className={`sidebar__element ${
                            page === 3 ? "selected" : null
                        } py-2`}
                    >
                        Listings
                    </h5>
                    <h5 onClick={SignOut} className="sidebar__element py-2">
                        <a href="/">Logout</a>
                    </h5>
                </div>
                {page === 0 ? (
                    <div className="feed">
                        <FarmerCard />
                        <FarmerCard />
                        <FarmerCard />
                        <FarmerCard />
                    </div>
                ) : null}
                {page === 1 ? (
                    <div className="profile">
                        <img
                            src={avatar}
                            alt="Avatar"
                            className="md-avatar rounded avatar"
                        />
                        <h2>
                            <span className="badge badge-primary">
                                {user.role} admin
                            </span>
                        </h2>
                        <h4 className="d-flex">
                            Rating :{" "}
                            {Array(user?.ratings)
                                .fill()
                                .map((_, i) => (
                                    <div className={"ml-2"}>⭐️</div>
                                ))}
                        </h4>
                        <div className="accordion w-100" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h5 className="mb-0">
                                        <button
                                            className="btn btn-link"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Mandi Details
                                        </button>
                                    </h5>
                                </div>

                                <div
                                    id="collapseOne"
                                    className="collapse show"
                                    aria-labelledby="headingOne"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="w-50">
                                                <div className="flex__div">
                                                    <h6 className="text-primary">
                                                        Mandi Name :{" "}
                                                    </h6>
                                                    <h5>{user?.fullName}</h5>
                                                </div>
                                                <div className="flex__div">
                                                    <h6 className="text-primary">
                                                        Coordinator Name :{" "}
                                                    </h6>
                                                    <h5>Bablu Yadav</h5>
                                                </div>
                                            </div>
                                            <div className="w-50">
                                                <div className="flex__div">
                                                    <h6 className="text-primary">
                                                        State :{" "}
                                                    </h6>
                                                    <h5>{user?.state}</h5>
                                                </div>
                                                <div className="flex__div">
                                                    <h6 className="text-primary">
                                                        City :{" "}
                                                    </h6>
                                                    <h5>{user?.city}</h5>
                                                </div>
                                                <div className="flex__div">
                                                    <h6 className="text-primary">
                                                        Phone :{" "}
                                                    </h6>
                                                    <h5>
                                                        {user?.contactNumber}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h5 className="mb-0">
                                        <button
                                            className="btn btn-link collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Identification Details
                                        </button>
                                    </h5>
                                </div>
                                <div
                                    id="collapseTwo"
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                        <div className="flex__div">
                                            <h6>Aadhar : </h6>
                                            <h5>9345 3459 4353</h5>
                                        </div>
                                        <div className="flex__div">
                                            <h6>PAN : </h6>
                                            <h5>9345 3459 4353</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}

                {page === 2 ? (
                    <div className={"produce"}>
                        <ConfirmOrders />
                        <ConfirmOrders />
                        <ConfirmOrders />
                        <ConfirmOrders />
                    </div>
                ) : null}

                {page === 3 ? (
					<>
                    <div className={"produce"}>
						<div style={{width:'100%'}}>
						<div
                            class="alert alert-success py-3 w-100"
                            style={{
								display: `${success ? "block" : "none"}`,
                            }}
                            role="alert"
							>
                            Produce Added
                        </div>
						<AddListing id={user._id} user={user} func={setSuccess}/>
						</div>
                        {produceList.map((item) => (
							<Listings
							id={item._id}
							name={item.productName}
							quantity={item.quantityKG}
							grade={item.grade}
							price={item.showPrice}
                            />
							))}
                    </div>
							</>
                ) : null}
            </div>
        </div>
    );
}
