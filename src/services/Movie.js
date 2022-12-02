import Config from 'react-native-config';
import { baseURL, queries } from './constants';
import callApi from './index';

export const fetchMovies = async ({search, page}) => {
    const res = await callApi({
        params: {
            [queries.apiKey]: Config.API_KEY,
            [queries.search]: search,
            [queries.page]: page,
        },
        baseURL,
    });
    return res;
};

export const fetchMovieDetail = async ({id}) => {
    const res = await callApi({
        params:{
            [queries.apiKey]: Config.API_KEY,
            [queries.imdbId]: id,
        },
        baseURL,
    });
    return res;
};
