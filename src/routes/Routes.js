import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MoviesHome from '../components/MoviesHome';
import MovieDetailsComp from '../components/movieDetails/MovieDetailsComp';

export default function ApplicationRoutes({props}) {
    return (
        <Router>
            <Route exact path="/" component={MoviesHome} />
            <Route path="/movieDetails" component={MovieDetailsComp} />
            <Route path="/movieDetails" render={() => 
                <MovieDetailsComp {...props} getMoviesList={props.getMoviesList} />}
            />
            <Route path="/home" component={MoviesHome} />
        </Router>
    );
};
