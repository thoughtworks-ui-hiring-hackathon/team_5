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