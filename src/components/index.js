import {connect} from 'react-redux'
import {getMovies} from '../actions/simple-action';
import MoviesHome from './MoviesHome';

const mapStateToProps = (state) => {
    const {app = {}} = state;

    return {
        input: app.input,
        challenge: app.challenge
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getInputDetails: () => dispatch(getInputDetails()),
        // setOutputDetails: (data) => dispatch(setOutputDetails(data)),
        // getNewChallenge: () => dispatch(getChallenge()),
        getMoviesList: () => dispatch(getMovies())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MoviesHome)