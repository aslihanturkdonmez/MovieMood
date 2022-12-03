import {ADD_MOVIE, SET_MOVIE_LIST} from '../actions/ActionTypes';

const initialState = {
    MovieList: [],
  };

const MovieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                MovieList:[...state.MovieList, action.data],
            }
        case SET_MOVIE_LIST:
            return {
                ...state,
                MovieList: action.data || [],
            }
        default:
            return state;
    }
};

export default MovieListReducer;