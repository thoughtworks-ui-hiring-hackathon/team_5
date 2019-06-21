import {ACTION_TYPES} from '../consts';

const appReducer = (state = [], action) => {
    const {type, payload} = action;
    let newState = {};

    switch (type) {
        case ACTION_TYPES.GET_MOVIES_DETAILS:
            newState = {
                ...state,
                movieDetails: payload
            };
            return newState;
        case ACTION_TYPES.GET_LATEST_MOVIES_DETAILS:
            newState = {
                ...state,
                LatestMovies: payload.results
            };
            return newState;
        case ACTION_TYPES.GET_RELATED_MOVIES:
                newState = {
                    ...state,
                    relatedMovies: payload.results
                };
            return newState;
        case ACTION_TYPES.GET_MOVIES_GENRES:
            newState = {
                ...state,
                MovieGenresList: payload.genres
            };
            return newState;
        case ACTION_TYPES.GET_ACTOR_DETAILS:
                newState = {
                    ...state,
                    actorDetails: payload
                };
            return newState;
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