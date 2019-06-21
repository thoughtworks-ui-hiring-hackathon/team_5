import {ACTION_TYPES} from '../consts';
import Services from '../services/restServices';

const getLatestMovies = () => {
    return (dispatch) => {
        Services.getLatestMoviesDetails().then((res = {}) => {
            dispatch({
                type: ACTION_TYPES.GET_LATEST_MOVIES_DETAILS,
                payload: res
            });
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
};

const getMoviesGenres = () => {
    return (dispatch) => {
        Services.getMoviesGenres().then((res = {}) => {
            dispatch({
                type: ACTION_TYPES.GET_MOVIES_GENRES,
                payload: res
            });
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
};

const setOutputDetails = (data) => {
    return (dispatch) => {
        Services.setOutputDetails({data}).then((res) => {
            dispatch({
                type: ACTION_TYPES.SET_OUTPUT_DETAILS,
                payload: res
            });
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
};

const getChallenge = () => {
    return (dispatch) => {
        Services.getChallenge().then((res) => {
            dispatch({
                type: ACTION_TYPES.GET_CHALLENGE_DETAILS,
                payload: res
            });
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
};

export {
    getLatestMovies,
    getMoviesGenres,
    setOutputDetails,
    getChallenge
}