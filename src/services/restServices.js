import ServiceBase from './ServiceClass';

class RestServices {
    getMoviesDetails = ({config} = {}) => {
        config = {
            params: {
                api_key: ''
            }
        };
        const url = '';
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

