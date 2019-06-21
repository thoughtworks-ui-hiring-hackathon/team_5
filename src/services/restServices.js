import ServiceBase from './ServiceClass';

class RestServices {
    getLatestMoviesDetails = ({config} = {}) => {
        config = {
            params: {
                api_key: ''
            }
        };
        const url = '/movie/now_playing';
        return ServiceBase.ajax.get(url, config);
    };

    getMoviesGenres = ({config} = {}) => {
        config = {
            params: {
                api_key: ''
            }
        };
        const url = '/genre/movie/list';
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

