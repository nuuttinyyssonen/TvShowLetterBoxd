import axios from 'axios';
import options from '../secret.js';

const baseUrl = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";

const getTopRatedShows = async() => {
    const response = await axios.get(baseUrl, options.options);
    return response.data
};

export default {
    getTopRatedShows
}