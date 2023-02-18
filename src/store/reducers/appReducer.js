import actionTypes from "../actions/actionTypes";

const initState = {
    honeData:[],
    test: "hello"
}

const appReducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.GET_HOME:
            return state
        default:
            return initState
    }
}

export default appReducer