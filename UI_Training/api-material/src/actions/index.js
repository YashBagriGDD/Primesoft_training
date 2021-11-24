import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = (id = "") => async dispatch => {
    const response = await jsonPlaceholder.get(`/posts/${id}`);

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};