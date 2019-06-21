import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Dashboard from '../components';

export default function ApplicationRoutes() {
    return (
        <Router>
            <Route exact path="/" component={Dashboard} />
            <Route path="/tryRoute" component={Dashboard} />
            <Route path="/home" component={Dashboard} />
        </Router>
    );
};
