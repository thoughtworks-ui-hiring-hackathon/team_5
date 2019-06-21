import React, {Component} from 'react';
import ItemsCarousel from 'react-items-carousel';
import isEmpty from 'lodash/isEmpty';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MoviesCard from './moviesCard';

export default class MoviesHome extends Component {

    constructor(props) {
        super(props);
        //this.fetchMoviesList = this.fetchMoviesList.bind(this);
        this.showDetailsPage = this.showDetailsPage.bind(this);
        this.createChildren = this.createChildren.bind(this);
        this.state = {
            children: [],
            activeItemIndex: 0,
        };

    }

    componentWillMount() {
        this.props.getLatestMoviesList();
        this.props.getTrendingMoviesList();
        this.props.getMostWatchedMoviesList();
        this.props.getMoviesGenresList();
    }

    showDetailsPage(movieId) {
        // this.props.getInputDetails();
        const {history} = this.props;
        history.push(`./movieDetails/${movieId}`);
    }

    createChildren(movies) {
        const {MovieGenresList} = this.props;
        return movies.map(movie => {
            return <MoviesCard  movie={movie} MovieGenresList={MovieGenresList} />
        });
    }

    render() {
        const {LatestMovies, MostWatchedMovies, TrendingMovies} = this.props;
        let latestChildren = [];
        let mostWatchedChildren = [];
        let trendingChildren = [] ;

        if (!isEmpty(LatestMovies)) {
            latestChildren = this.createChildren(LatestMovies);
        }
        if (!isEmpty(MostWatchedMovies)) {
            mostWatchedChildren = this.createChildren(MostWatchedMovies);
        }
        if (!isEmpty(TrendingMovies)) {
            trendingChildren = this.createChildren(TrendingMovies);
        }

        if (isEmpty(latestChildren)) {
            return null;
        }
        return (
            <div className="movies-list">
                <div> Welcome to TV Show</div>
                <input type="button" onClick={this.fetchMoviesList} value={"Get Movies"} />
                <input type="button" onClick={() => this.showDetailsPage(320288)} value="Show More" />
                <div>
                    <div className="movie-type-header"> Latest Movies </div>
                    <ItemsCarousel
                        gutter={12}
                        activePosition={'center'}
                        chevronWidth={60}
                        numberOfCards={4}
                        slidesToScroll={2}
                        outsideChevron={true}
                        showSlither={false}
                        firstAndLastGutter={false}
                        activeItemIndex={this.state.activeItemIndex}
                        requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                        rightChevron={'>'}
                        leftChevron={'<'}
                    >{latestChildren}</ItemsCarousel>
                </div>
                <div>
                    <div className="movie-type-header"> Trending </div>
                    <ItemsCarousel
                        gutter={12}
                        activePosition={'center'}
                        chevronWidth={60}
                        numberOfCards={4}
                        slidesToScroll={2}
                        outsideChevron={true}
                        showSlither={false}
                        firstAndLastGutter={false}
                        activeItemIndex={this.state.activeItemIndex}
                        requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                        rightChevron={'>'}
                        leftChevron={'<'}
                    >{trendingChildren}</ItemsCarousel>
                </div>
                <div>
                    <div className="movie-type-header"> Most Watched</div>
                    <ItemsCarousel
                        gutter={12}
                        activePosition={'center'}
                        chevronWidth={60}
                        numberOfCards={4}
                        slidesToScroll={2}
                        outsideChevron={true}
                        showSlither={false}
                        firstAndLastGutter={false}
                        activeItemIndex={this.state.activeItemIndex}
                        requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                        rightChevron={'>'}
                        leftChevron={'<'}
                    >{mostWatchedChildren}</ItemsCarousel>
                </div>
            </div>
        )
    }

}