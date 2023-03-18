import AUTH from "../Constants/data";
import { GET_TODO_DATA } from "../../config/webservices";
import ApiSauce from '../../utils/network'

export const getData = (CB) => async (dispatch) => {
    dispatch({ type: AUTH.DATA_API});
    try {
        let response = await ApiSauce.getWithoutToken(GET_TODO_DATA);
            dispatch({
                type: AUTH.DATA_API,
                data: response,
            });
            CB(response)
    } catch (error) {
        alert(error);
    }
};

export const addData = (data) => {
    return{
        type:AUTH.ADD_DATA,
        payload:data
    }
}

export const deleteData = (data) =>{
    return{
        type:AUTH.DELETE_DATA,
        payload:data

    }
}

export const updateData = (val , id) => {
    return{
        type:AUTH.UPDATE_DATA,
        payload:val,
        id:id
    }
}








            

