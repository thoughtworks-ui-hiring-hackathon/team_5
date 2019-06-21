import React from 'react';
import {connect} from 'react-redux'
import {getLatestMovies, getMoviesGenres, getMovieDetails, 
    getRelatedMovieDetails, getActorDetail, getTrendingMovies, 
    getMostWatchedMovies} from './actions/simple-action';
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
        TrendingMovies: simpleReducer.TrendingMovies,
        MostWatchedMovies: simpleReducer.MostWatchedMovies,
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
        getTrendingMoviesList: () => dispatch(getTrendingMovies()),
        getActorDetails: (id) => dispatch(getActorDetail(id)),
        getMostWatchedMoviesList: () => dispatch(getMostWatchedMovies())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);