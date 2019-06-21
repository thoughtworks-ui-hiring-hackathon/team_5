import React, {Component} from 'react';
import {imageUrl} from '../../config';

class RelatedMoviesView extends Component {

    componentDidMount() {
        const {getRelatedMovieDetails} = this.props;
        const {pathname} = window.location;
        const movieId = pathname.replace('/movieDetails/', '')
        if(getRelatedMovieDetails) {
            getRelatedMovieDetails(movieId);
        }
    }

    render() {
        const {relatedMovies = []} = this.props;
        return (
            <div className="related-movies">
                <h1>Related Movies</h1>
                {relatedMovies.length > 0 && <ul> 
                    {relatedMovies.map((item) => <li keys={item.title}>{item.title}</li>)}
                </ul>}
            </div>
            
        )
    }
}

export default RelatedMoviesView;