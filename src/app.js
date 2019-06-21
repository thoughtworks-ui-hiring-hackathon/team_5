import React from 'react';
import {connect} from 'react-redux'
import {getMovies} from './actions/simple-action';
import {ConnectedRouter } from 'connected-react-router';
import ApplicationRoutes from './routes/Routes';
import './scss/style.scss';

const App = (props) => {
    return (
        <ConnectedRouter  history={props.history}>
            <ApplicationRoutes props={props} />
        </ConnectedRouter >
    );
};

const mapStateToProps = (state) => {
    const {simpleReducer = {}} = state;

    return {
        movieDetails: simpleReducer.movieDetails
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getInputDetails: () => dispatch(getInputDetails()),
        // setOutputDetails: (data) => dispatch(setOutputDetails(data)),
        // getNewChallenge: () => dispatch(getChallenge()),
        getMoviesList: (id) => dispatch(getMovies(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);