import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MoviesHome from '../components/MoviesHome';
import MovieDetailsMainComp from '../components/movieDetails/MovieDetailsMainComp';
import ActorDetailsComp  from '../components/ActorDetailsComp';

export default function ApplicationRoutes({props}) {
    return (
        <Router>
            <Route exact path="/" component={MoviesHome} />
            <Route exact path="/movieDetails/:id" render={() => 
                <MovieDetailsMainComp {...props} />}
            />
            <Route exact path="/actors/:id" render={() => 
                <ActorDetailsComp {...props} />}
            />
            <Route path="/home" component={MoviesHome} />
        </Router>
    );
};
