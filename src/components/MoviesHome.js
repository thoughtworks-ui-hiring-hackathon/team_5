import React, {Component} from 'react';

export default class MoviesHome extends Component {

    constructor(props) {
        super(props);
        this.fetchMoviesList = this.fetchMoviesList.bind(this);
    }

    fetchMoviesList() {
        this.props.getMoviesList()
    }

    render() {
        return (
            <div>
                <div> Welcome to TV Show</div>
                <input type="button" onClick={this.fetchMoviesList} value={"Get Movies"} />
            </div>
        )
    }

}