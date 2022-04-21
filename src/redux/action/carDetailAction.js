import axios from "axios";
import { GET_CAR_DETAIL } from "../types";


export const getCarDetail = (id) => {
    // const { id } = useParams();
    return (dispatch) => {
        dispatch({type: `${GET_CAR_DETAIL}_LOADING`});

        axios({
            method: 'GET',
            url: `https://rent-cars-api.herokuapp.com/customer/car/${id}`
        })
        .then((response)=>{
            dispatch({
                type: `${GET_CAR_DETAIL}_FULFILLED`,
                payload: response.data,
            });
        })
        .catch((error)=>{
            dispatch({
                type: `${GET_CAR_DETAIL}_ERROR`,
                error: error.message,
            });
        })
    }
}