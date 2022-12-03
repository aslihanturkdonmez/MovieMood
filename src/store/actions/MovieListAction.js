import {ADD_MOVIE, SET_MOVIE_LIST} from './ActionTypes';

const addMovie = (movie) => {
    return {
        type: ADD_MOVIE,
        data: movie,
    }
};

const setMovieList = (movieList) => {
    return {
        type: SET_MOVIE_LIST,
        data: movieList,
    }
};

export {
    addMovie,
    setMovieList,
}