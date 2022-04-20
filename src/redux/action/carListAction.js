import axios from "axios";
import {GET_CAR_LIST} from "../types";

export const getCarList = () => {
    return (dispatch) => {
        dispatch({type: `${GET_CAR_LIST}_LOADING`});

        axios({
            method: 'GET',
            url: 'https://rent-cars-api.herokuapp.com/customer/car',
        })
        .then((response)=>{
            dispatch({
                type: `${GET_CAR_LIST})_FULFILLED`,
                payload: response.data,
            });
        })
        .catch((error)=>{
            dispatch({
                type: `${GET_CAR_LIST})_ERROR`,
                error: error.message,
            });
        });
    };
};