import {ACTION_TYPES} from '../consts';

const appReducer = (state = [], action) => {
    const {type, payload} = action;
    let newState = {};

    switch (type) {
        case ACTION_TYPES.GET_LATEST_MOVIES_DETAILS:
            newState = {
                ...state,
                LatestMovies: payload.results
            };
            return newState;
        case ACTION_TYPES.GET_MOVIES_GENRES:
            newState = {
                ...state,
                MovieGenresList: payload.genres
            };
        case ACTION_TYPES.GET_CHALLENGE_DETAILS:
            newState = {
                ...state,
                challenge: payload
            };
            return newState;
        default:
            return state
    }
};

export default appReducer