import {combineReducers} from 'redux';
import simpleReducer from './simple-reducer';
import {connectRouter} from "connected-react-router";
import {createHashHistory} from "history";

export const routerHistory = createHashHistory();

export default combineReducers({
	simpleReducer,
    router: connectRouter(routerHistory)
});