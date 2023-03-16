import AUTH from "../Constants/data";

export default (state = [], action = {}) => {
    console.log('/////////' , state)
    switch (action.type) {
        case AUTH.DATA_API:
            return {
                ...state,
                data: action.data
            };
            case AUTH.ADD_DATA:
            return {
                ...state,
                data: [...state.data , {id:action.payload.id,title:action.payload.title} ]
            };
            case AUTH.DELETE_DATA:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
};
