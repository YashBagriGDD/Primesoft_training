import jsonPlaceholder from "../../apis/jsonPlaceholder";

//Duplicate to handle single post fetchPostDetail
export const fetchPosts = () => async dispatch => {
    //Put async calls in try catch blocks 
    const response = await jsonPlaceholder.get(`/posts`);

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};

export const fetchPostDetail = (id = "") => async dispatch => {
    //Put async calls in try catch blocks 
    const response = await jsonPlaceholder.get(`/posts/${id}`);

    dispatch({
        type: 'FETCH_POST_DETAIL',
        payload: response.data
    })
};

export const fetchUser = (userId = "") => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${userId}`);

        dispatch({
            type: "FETCH_USER",
            payload: response.data
        })
    }
}