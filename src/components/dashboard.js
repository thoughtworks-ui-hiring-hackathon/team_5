import React, {Component} from 'react';
import {isEqual as _isEqual, isEmpty as _isEmpty} from 'lodash';

export default class MyApp extends Component {
    constructor(props) {
        super(props);
        this.prepareOutputPayload = this.prepareOutputPayload.bind(this);
        this.getNewChallenge = this.getNewChallenge.bind(this);
        this.showDetailsPage = this.showDetailsPage.bind(this);
        this.executeChallenge = this.executeChallenge.bind(this);
    }

    prepareOutputPayload(stage) {
        let data = {};
        switch (stage) {
            case "1":
                data = {
                    output: {
                        count:  this.props.input.length
                    }
                };
                return data;
            case "2": {
                const {input} = this.props;
                let count = 0;
                if(input) {
                    input.forEach(obj => {
                        if (this.isProductActive(obj)) {
                            count++
                        }
                    });
                    data = {
                        output: {
                            count
                        }
                    };
                    return data;
                }
                }
            case "3": {
                const {input} = this.props;
                // let activeArray = [];
                let outputObject = {};
                if(input) {
                    input.forEach(obj => {
                        if (this.isProductActive(obj)) {
                            outputObject[obj.category] = (outputObject[obj.category] || 0)+1;
                        }
                    });
                    data = {
                        output: {
                            ...outputObject
                        }
                    };
                    return data;
                }
            }
            case "4": {
                const {input} = this.props;
                let totalValue = 0;
                if(input) {
                    input.forEach(obj => {
                        if (this.isProductActive(obj)) {
                            totalValue += obj.price;
                        }
                    });
                    data = {
                        output: {
                            totalValue
                        }
                    };
                    return data;
                }
            }
            default:
                return null;
        }


    }

    getNewChallenge() {
        this.props.getNewChallenge();
    }

    showDetailsPage(movieId) {
        // this.props.getInputDetails();
        const {history} = this.props;
        history.push("./movieDetails");
    }

    static isProductActive(obj) {
        const startDate = new Date(obj.startDate);
        const endDate = new Date(obj.endDate);
        const today = new Date();
        const nullDate = new Date(null);
        if (startDate.getTime() < today.getTime() &&
            (endDate.getTime() > today.getTime() || endDate.getTime() === nullDate.getTime())
        ) {
            return true
        }
        return false;
    }
    executeChallenge(currentStage) {
        const data = this.prepareOutputPayload(currentStage);
        console.log("Data to send for challenge: " + JSON.stringify(data));
        this.props.setOutputDetails(data);
    }

    render() {
        const {input = [], challenge = {}} = this.props;
        const {stage = ""} = challenge;
        const currentStage = stage .split('/')[0];
        console.log("Length of input is : " + input.length);

        return (
            <div>
                Hello ThoughtWorks !
                <input type="button" onClick={this.getNewChallenge} value="New Challenge"/>
                {!_isEmpty(challenge) && !challenge.message &&
                    <div> Challenge
                        <div> Stage: {challenge.stage}</div>
                        <div> Statement: {challenge.statement}</div>
                        <div> Instructions: {challenge.instructions}</div>
                    </div>
                }
                {
                    !_isEmpty(challenge) && challenge.message &&
                        <div>{challenge.message}</div>
                }

                <input type="button" onClick={() => this.showDetailsPage(1)} value="Show More" />
                <input type="button" onClick={() => this.executeChallenge(currentStage)} value="Execute Challenge" />

            </div>
        )
    }

};
