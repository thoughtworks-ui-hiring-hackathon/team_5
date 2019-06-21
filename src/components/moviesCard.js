import React from 'react';
import isEmpty from 'lodash/isEmpty';

export default function MoviesCard({movie, MovieGenresList}) {
    const {title, poster_path, vote_average, genre_ids} = movie;
    let  getMovieType = [];
    const getMovieFlavor = (obj) => {
       return genre_ids.find((id) => { return obj.id === id ? obj.name : ''});
    };
    if (isEmpty(movie)) {
        return null;
    }

    if (!isEmpty(MovieGenresList)) {
        getMovieType = MovieGenresList.filter(getMovieFlavor);
    }

    const goToMovieDetails = (e) => {

    };
    return(
        <section className="movies-card">
            <div className="movie-cover-image">
                <img src={`./${poster_path}"`} />
            </div>
            <div className="movie-info-area">
                <div className="movie-title">
                    <span className="title">{title}</span>
                    <span className="favorite-con">Heart icon</span>
                </div>
                <div className="movie-type">{
                    getMovieType.map((type, index) => {
                        if (index < (getMovieType.length-1)){
                            return `${type.name}, `;
                        }
                        return type.name;
                    })
                }
                </div>
                <div className="rating">
                    <span className="star-icon">{vote_average}</span>
                    <span className="show-more-link" onClick={(e) => goToMovieDetails(e)}>show more</span>
                </div>
            </div>
        </section>
    )
};
