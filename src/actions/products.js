import axios from "axios";

export const GET_PRODUCTS_SUCCESS = Symbol('GET_PRODUCTS_SUCCESS')

export const getProducts = () => dispatch => {
    return axios.get("http://demo7475333.mockable.io/spaceships").then(({
        data: {
            products
        }
    }) => {
        dispatch(onGetProducts(products))
    });

}

function onGetProducts(products) {
    return {
        type: GET_PRODUCTS_SUCCESS,
        products
    }
}