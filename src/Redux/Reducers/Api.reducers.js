import AUTH from "../Constants/data";
const initial = {
    data: []
}

export default (state = initial, action = {}) => {
    console.log('/////////' , action.payload , state)
    switch (action.type) {
        case AUTH.DATA_API:
            return {
                ...state,
                data: action.data
            };
            case AUTH.ADD_DATA:
                const abc = action.payload
                const def = [...state.data , abc]
                return {
                    ...state,
                    data: def
                   }
            case AUTH.DELETE_DATA:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
};
