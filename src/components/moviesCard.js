import React from 'react';

export default function MoviesCard({props}) {

    const {LatestMovies, MovieGenresList = []} = props;
    const {original_title, poster_path, vote_average, genre_ids} = LatestMovies;

    function getMovieFlavor(obj) {
       return genre_ids.find((id) => { return obj.id === id ? obj.name : ''});
    }
    const getMovieType = MovieGenresList.filter(this.getMovieFlavor);
    return(
        <section className="movies-card">
            <div className="movie-cover-image">
                <img src={`./${poster_path}"`} />
            </div>
            <div className="movie-title">{original_title}</div>
            <div className="movie-type">{getMovieType[0]}   </div>
            <div className="rating">{vote_average}</div>
        </section>
    )
};
