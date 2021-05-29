import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "../../helpers/axios";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function AddListing({ user, id, func}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [produce, setProduce] = React.useState({
        productType: "",
        productName: "",
        quantityKG: 0,
        showPrice: 0,
        offerPrice: 0,
        grade: "",
        affordableRangeKM: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduce({
            ...produce,
            [name]: value,
        });
    };

    const addProduce = async () => {
        setOpen(false);
        await axios
            .post("/product/create", {
                ...produce,
                offerPrice: produce.showPrice,
                productType: user.role === "farmer" ? "sell" : "buy",
            })
            .then((res) => {
                func(true);
                console.log("product", res.data);
            })
            .catch((err) => {
                alert(err);
            });
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button
                className="btn btn-primary"
                type="button"
                onClick={handleOpen}
            >
                + Add Produce Stock
            </button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {/* <form> */}
                            <div class="mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                >
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="product_name"
                                    onChange={handleChange}
                                    name="productName"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                >
                                    Product Quantity
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="product_quanttity"
                                    onChange={handleChange}
                                    name="quantityKG"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                >
                                    Product Price
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="product_name"
                                    onChange={handleChange}
                                    name="showPrice"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div class="mb-3">
                                <label
                                    for="exampleInputEmail1"
                                    class="form-label"
                                >
                                    Product Grade
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="product_grade"
                                    onChange={handleChange}
                                    name="grade"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <button
                                onClick={addProduce}
                                type="submit"
                                class="btn btn-primary"
                            >
                                Submit
                            </button>
                        {/* </form> */}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
