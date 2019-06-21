import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MoviesHome from '../components/MoviesHome';
import MovieDetailsComp from '../components/movieDetails/MovieDetailsComp';


export default function ApplicationRoutes({props}) {
    return (
        <Router>
            <Route exact path="/" render={() =>
                <MoviesHome {...props} />}
           />
            <Route path="/movieDetails" component={MovieDetailsComp} />
            <Route exact path="/movieDetails/:id" render={() =>
                <MovieDetailsComp {...props} getMoviesList={props.getMoviesList} />}
            />
            <Route path="/home" render={() =>
                <MoviesHome {...props} />}
            />
        </Router>
    );
};
