import { GET_CAR_DETAIL } from "../types";

const initialState = {
    data: [],
    isLoading: true,
    error: null,
}

const carDetailReducer = (state = initialState, action) =>{
    const{ type, payload, error } = action;
    switch(type){
        case `${GET_CAR_DETAIL}_LOADING`:
        return{
            ...state,
        };
        case `${GET_CAR_DETAIL}_FULFILLED`:
            return{
                ...state, 
                data: payload,
                isLoading: false,
            };
        case `${GET_CAR_DETAIL}_ERROR`:
            return{
                ...state, 
                isLoading: false,
                error: error,
            };
        default:
        return{
            ...state,
        };
    }
}

export default carDetailReducer;