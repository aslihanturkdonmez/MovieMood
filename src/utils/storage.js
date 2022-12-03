import AsyncStorage from '@react-native-async-storage/async-storage';

const setMovieList = async (movieList) => {
    try {
        const listJson = JSON.stringify(movieList)
        await AsyncStorage.setItem('@movie_list', listJson);
    } catch (error) {
        console.log(error);
    }
};

const getMovieList = async () => {
    try {
        const listJson = await AsyncStorage.getItem('@movie_list');
        return listJson != null ? JSON.parse(listJson) : null;
    } catch (error) {
        console.log(error);        
    }
};

export default {
    setMovieList,
    getMovieList,
}