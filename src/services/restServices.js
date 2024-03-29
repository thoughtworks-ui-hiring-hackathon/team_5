import ServiceBase from './ServiceClass';
import {configGlobal} from '../config';

class RestServices {
    getLatestMoviesDetails = ({config} = {}) => {
        const url = '/movie/now_playing';
        return ServiceBase.ajax.get(url, {
            ...config,
            ...configGlobal
        });
        return ServiceBase.ajax.get(url, config);
    };

    getMostWatchedMovies = ({config} = {}) => {
        const url = '/movie/popular';
        return ServiceBase.ajax.get(url, {
            ...config,
            ...configGlobal
        });
        return ServiceBase.ajax.get(url, config);
    };

    getTrendingMovies = ({config} = {}) => {
        const url = '/trending/movie/week';
        return ServiceBase.ajax.get(url, {
            ...config,
            ...configGlobal
        });
        return ServiceBase.ajax.get(url, config);
    };
    getMoviesDetails = ({config} = {}) => {
        const url = `/movie/${config.id}`; 
        const con = {
            ...config,
            ...configGlobal
        }
        con.params.language = 'en-US';
        con.params.append_to_response = 'credits';
        return ServiceBase.ajax.get(url, con);
    };

    getActorDetail = ({config} = {}) => {
        const url = `/person/${config.id}`;
        return ServiceBase.ajax.get(url, {
            ...config,
            ...configGlobal
        });
    };

    getRelatedMovieDetails = ({config} = {}) => {
        const url = `/movie/${config.id}/similar`;
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
        return ServiceBase.ajax.get(url, config);
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

