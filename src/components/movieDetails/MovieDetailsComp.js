import React, {Component} from 'react';
import {imageUrl} from '../../config';

class MovieDetailsComp extends Component {

    componentDidMount() {
        const {getMovieDetails} = this.props;
        const {pathname} = window.location;
        const movieId = pathname.replace('/movieDetails/', '')
        if(getMovieDetails) {
            getMovieDetails(movieId);
        }
    }

    render() {
        const {movieDetails = {}} = this.props;
        const {original_title, overview, genres, vote_average, poster_path} = movieDetails;
        let item = {};
        const movieImage = {
            backgroundImage: 'url('+ `${imageUrl}w500${poster_path}` +')',
        }
        return (
            <div className="movie-details-view">
                <div className="movie-image" style={movieImage}></div>
                <div className="movie-title">{original_title}</div>
                <div className="movie-description">{overview}</div>
                <div className="movie-details">
                    <div className="section-list">
                        <div className="section-item">Genre</div>
                        <div className="section-value">
                            {genres && <ul>
                                {genres.map((item) => <li key={item.name}>{item.name}</li>)}
                            </ul>}
                        </div>
                    </div>
                    <div className="section-list">
                        <div className="section-item">Cast</div>
                        <div className="section-value">Action, Adventure</div>
                    </div>
                    <div className="section-list">
                        <div className="section-item">Director</div>
                        <div className="section-value">Action, Adventure</div>
                    </div>
                    <div className="section-list">
                        <div className="section-item">Movie Rating</div>
                        <div className="section-value">
                            <div className="star-holder">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetailsComp;