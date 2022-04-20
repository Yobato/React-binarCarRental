import { GET_CAR_LIST } from "../types";

const initialState = {
    data: [],
    isLoading: true,
    error: null,
}

const carListReducer = (state = initialState, action) =>{
    const{ type, payload, error } = action;
    switch(type){
        case `${GET_CAR_LIST}_LOADING`:
        return{
            ...state,
        };
        case `${GET_CAR_LIST}_FULFILLED`:
            return{
                ...state, 
                data: payload,
                isLoading: false,
            };
        case `${GET_CAR_LIST}_ERROR`:
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

export default carListReducer;