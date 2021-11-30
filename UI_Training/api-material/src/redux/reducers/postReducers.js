export default (state = {list: [], detail: {}}, action) => {
    switch (action.type) {
        case "FETCH_POSTS":
            return {...state, list: action.payload};
        case "FETCH_POST_DETAIL":
            return {...state, detail: action.payload};
        default:
            return state;
    };
};