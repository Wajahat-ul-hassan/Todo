import AUTH from "../Constants/data";

export default (state = {}, action = {}) => {
    switch (action.type) {
        case AUTH.DATA_API:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
};
