import React from 'react';
import {ConnectedRouter } from 'connected-react-router';
import ApplicationRoutes from './routes/Routes';
import './scss/style.scss';

const App = ({ history }) => {
    return (
        <ConnectedRouter  history={history}>
            <ApplicationRoutes />
        </ConnectedRouter >
    );
};


export default App

