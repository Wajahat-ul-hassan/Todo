import AUTH from "../Constants/data";
import { GET_TODO_DATA } from "../../config/webservices";
import ApiSauce from '../../utils/network'

export const getData = (CB) => async (dispatch) => {
    dispatch({ type: AUTH.DATA_API});
    try {
        let response = await ApiSauce.getWithoutToken(GET_TODO_DATA);
        console.log('/////////' , response)
            dispatch({
                type: AUTH.DATA_API,
                data: response,
            });
            CB(response)
    } catch (error) {
        alert(error);
    }
};








            

