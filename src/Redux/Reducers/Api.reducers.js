import AUTH from "../Constants/data";
const initial = {
    data: []
}

export default (state = initial, action = {}) => {
    console.log("🚀 ~ file: Api.reducers.js:7 ~ action:", action.payload , action.id)
    switch (action.type) {
        case AUTH.DATA_API:
            return {
                ...state,
                data: action.data
            };
            case AUTH.ADD_DATA:
                const arr = []
                arr.push(action.payload)
                state.data.map((val)=>{
                    arr.push(val)
                })
                return {
                    ...state,
                    data:arr
                   }
            case AUTH.DELETE_DATA:
                const arr1 = []
                state.data.map((val)=>{
                 if(action.payload.id !== val.id){
                    arr1.push(val)
                 }
                })
            return {
                ...state,
                data:arr1
            };
            case AUTH.UPDATE_DATA:
            const arr2 = state.data.map((val)=>{
                 if(val.id == action.id) return {...val , title:action.payload.item}
                 return val
                })
            return{
                ...state,
                data:arr2
            }
        default:
            return state;
    }
};
