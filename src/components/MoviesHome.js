import React, {Component} from 'react';

export default class MoviesHome extends Component {

    constructor(props) {
        super(props);
        this.fetchMoviesList = this.fetchMoviesList.bind(this);
        this.showDetailsPage = this.showDetailsPage.bind(this);
    }

    fetchMoviesList() {
        this.props.getMoviesList()
    }

    showDetailsPage(movieId) {
        // this.props.getInputDetails();
        const {history} = this.props;
        history.push(`./movieDetails/${movieId}`);
    }

    

    render() {
        return (
            <div>
                <div> Welcome to TV Show</div>
                <input type="button" onClick={this.fetchMoviesList} value={"Get Movies"} />
                <input type="button" onClick={() => this.showDetailsPage(320288)} value="Show More" />
            </div>
        )
    }

}