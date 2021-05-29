import axios from "../helpers/axios";
import { productConstants } from "./constants";

export const addProduct = (product) => {
    return async (dispatch) => {
        dispatch({ type: productConstants.CREATE_PRODUCT_REQUEST });
        const res = await axios.product("/product/create", { ...product });

        if (res.status === 201) {
            const { message, product } = res.data;
            dispatch({
                type: productConstants.CREATE_PRODUCT_SUCCESS,
                payload: { message, product },
            });
        } else {
            if (res.status === 400) {
                dispatch({
                    type: productConstants.CREATE_PRODUCT_FAILURE,
                    payload: { error: res.data.error },
                });
            }
        }
    };
};
