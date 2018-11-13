import axios from 'axios';
import {setMovies} from './actions';
import {setGenres} from "./actions";
import {endpoints} from '../config';

export const getMovies = () => (dispatch) => {
    // thunk - dispatch actions when needed
    axios
        .get(endpoints.mostPopularMovies())
        .then((res) => {
            dispatch(setMovies(res.data.results))
        })
        .catch((error) => console.log(error));
};
export const getGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((res) => {
            dispatch(setGenres(res.data.genres))
        })
        .catch((error) => console.log(error));
};
export const getGenresMovies = (id) =>(dispatch)=> {
    axios
        .get(endpoints.genreMovies(id))
        .then((res) => {
            dispatch(setMovies(res.data.results))
        })
        .catch((error) => console.log(error));
};
