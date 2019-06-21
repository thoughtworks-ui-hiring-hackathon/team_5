import React from 'react';
import {connect} from 'react-redux'
import {getLatestMovies, getMoviesGenres, getMovieDetails, getRelatedMovieDetails, getActorDetail} from './actions/simple-action';
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
        LatestMovies: simpleReducer.LatestMovies,
        MovieGenresList: simpleReducer.MovieGenresList,
        movieDetails: simpleReducer.movieDetails,
        relatedMovies: simpleReducer.relatedMovies,
        actorDetails: simpleReducer.actorDetails
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getInputDetails: () => dispatch(getInputDetails()),
        // setOutputDetails: (data) => dispatch(setOutputDetails(data)),
        // getNewChallenge: () => dispatch(getChallenge()),
        getMovieDetails: (id) => dispatch(getMovieDetails(id)),
        getRelatedMovieDetails: (id) => dispatch(getRelatedMovieDetails(id)),
        getLatestMoviesList: () => dispatch(getLatestMovies()),
        getMoviesGenresList: () => dispatch(getMoviesGenres()),
        getActorDetails: (id) => dispatch(getActorDetail(id)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);