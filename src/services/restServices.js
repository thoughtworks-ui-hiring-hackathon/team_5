import ServiceBase from './ServiceClass';
import {configGlobal} from '../config';

class RestServices {
    getLatestMoviesDetails = ({config} = {}) => {
        const url = '/movie/now_playing';
        return ServiceBase.ajax.get(url, {
            ...config,
            ...configGlobal
        });
    };

    getMoviesDetails = ({config} = {}) => {
        const url = `/movie/${config.id}`;
        return ServiceBase.ajax.get(url, {
            ...config,
            ...configGlobal
        });
    };

    getMoviesGenres = ({config} = {}) => {
        const url = '/genre/movie/list';
        return ServiceBase.ajax.get(url, {
            ...config,
            ...configGlobal
        });
    };
    

    getChallenge = ({config} = {}) => {
        const getChallengeUrl = '/challenge';
        return ServiceBase.ajax.get(getChallengeUrl, config);
    };
    getInputDetails = ({config} = {}) => {
        const getChallengeInputUrl = '/challenge/input';
        return ServiceBase.ajax.get(getChallengeInputUrl, config);
    };

    setOutputDetails = ({data, config = {}}) => {
        const setChallengeOutputUrl = '/challenge/output';
        return ServiceBase.ajax.post(setChallengeOutputUrl, data, config);
    }
}

export default new RestServices();

