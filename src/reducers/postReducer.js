// postReducer.js
import { POST_REQUEST, POST_SUCCESS, POST_FAILURE } from '../actions/actionTypes';

const initialState = {
    loading: false,
    posts: [],
    error: null,
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_REQUEST:
            return { ...state, loading: true };
        case POST_SUCCESS:
            return { ...state, loading: false, posts: action.payload, error: null };
        case POST_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export default postReducer;
