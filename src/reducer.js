import { GET_DATA_SUCCESS } from "./action";

const myFirstReducer = (state={apiData:[]}, action)=>{
    switch(action.type){
        case GET_DATA_SUCCESS:
            return{
                ...state,
                apiData:action.shopData
            }
        default:
            return state;
    }
}

export default myFirstReducer;