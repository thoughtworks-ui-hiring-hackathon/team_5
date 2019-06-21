import React, {Component} from 'react';
import {imageUrl} from '../config';

class ActorDetailsComp extends Component {

    componentDidMount() {
        const {getActorDetails} = this.props;
        const {pathname} = window.location;
        const movieId = pathname.replace('/actors/', '')
        if(getActorDetails) {
            getActorDetails(movieId);
        }
    }

    render() {
        const {actorDetails = {}} = this.props;
        const {name, birthday, biography, place_of_birth, profile_path} = actorDetails;
        const movieImage = {
            width: '300px',
            height: '300px',
            backgroundSize: '100%',
            backgroundImage: 'url('+ `${imageUrl}w500${profile_path}` +')',
        }
        return (
            <div className="related-movies">
                <div>
                <div className="actor-image" style={movieImage}></div>
                    <h1>{name}</h1>
                    <div>BirthDay : {birthday}</div>
                    <div>Biograpthy : {biography}</div>
                </div>
            </div>
            
        )
    }
}

export default ActorDetailsComp;