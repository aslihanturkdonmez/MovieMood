import Config from 'react-native-config';
import { queries } from './constants';
import callApi from './index';

export const fetchMovies = async ({search, page}) => {
    const res = await callApi({
        params: {
            [queries.apiKey]: Config.API_KEY,
            [queries.search]: search,
            [queries.page]: page,
        }
    });
    return res;
};
