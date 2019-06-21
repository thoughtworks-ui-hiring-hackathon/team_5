import {connect} from 'react-redux'
import {getInputDetails, setOutputDetails, getChallenge} from '../actions/simple-action';
import Dashboard from './dashboard';

const mapStateToProps = (state) => {
    const {app = {}} = state;

    return {
        input: app.input,
        challenge: app.challenge
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInputDetails: () => dispatch(getInputDetails()),
        setOutputDetails: (data) => dispatch(setOutputDetails(data)),
        getNewChallenge: () => dispatch(getChallenge())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)