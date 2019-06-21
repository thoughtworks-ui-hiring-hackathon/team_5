import React, {Component} from 'react';


class MovieDetailsComp extends Component {

    componentDidMount() {
        const {getMoviesList} = this.props;
        if(getMoviesList) {
            getMoviesList()
        }
    }

    render() {
        return (
            <div className="movie-details-view">
                <div className="movie-image"></div>
                <div className="movie-title">Bahubali</div>
                <div className="movie-description">Not more than 300 line description</div>
                <div className="movie-details">
                    <div className="section-list">
                        <div className="section-item">Genre</div>
                        <div className="section-value">Action, Adventure</div>
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
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetailsComp;