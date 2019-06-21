import React, {Component} from 'react';
import {imageUrl} from '../../config';
import MovieDetailsView from './MovieDetailsView';
import RelatedMoviesView from './RelatedMoviesView';


class MovieDetailsMainComp extends Component {

    render() {
        return (
            <div className="movie-details-view">
                <MovieDetailsView {...this.props} />
                <RelatedMoviesView {...this.props} />
            </div>
        )
    }
}

export default MovieDetailsMainComp;