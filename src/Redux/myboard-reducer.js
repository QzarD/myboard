const ADD_LIST='myboard/ALL_LIST'

let initialState = [];
export const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST:
            return state;
        default:
            return state
    }
}