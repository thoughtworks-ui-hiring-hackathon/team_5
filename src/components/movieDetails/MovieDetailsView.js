import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {imageUrl} from '../../config';


class MovieDetailsView extends Component {

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
        const {original_title, overview, genres, vote_average, poster_path, release_date , credits = {}} = movieDetails;
        const {cast} = credits;
        let item = {};
        const movieImage = {
            backgroundImage: 'url('+ `${imageUrl}w500${poster_path}` +')',
        }
        return (
            <React.Fragment>
                <div className="movie-image" style={movieImage}></div>
                <div className="fav-button">
                    <span>Mark as favorite</span>
                    <i className="fas fa-star"></i>
                </div>
                <div className="movie-title">{original_title}</div>
                <div className="movie-description">{overview}</div>
                <div className="movie-details">
                    <div className="section-list">
                        <div className="section-item">Genre</div>
                        <div className="section-value">
                            {genres && <div className="genre-values">
                                {genres.map((item) => <span key={item.name}>{item.name}</span>)}
                            </div>}
                        </div>
                    </div>
                    <div className="section-list">
                        <div className="section-item">Release Date</div>
                        <div className="section-value">{release_date}</div>
                    </div>
                    <div className="section-list">
                        <div className="section-item">Cast</div>
                        <div className="section-value">
                             {cast && <div className="genre-values">
                                {cast.map((item) => <Link to={`/actors/${item.id}`} activeClassName="active">{item.name}</Link>)}
                            </div>}
                        </div>
                    </div>
                    <div className="section-list">
                        <div className="section-item">Movie Rating</div>
                        <div className="section-value">
                            {vote_average}
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
            </React.Fragment>
        )
    }
}

export default MovieDetailsView;