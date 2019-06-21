import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './scss/_index.css';
import configureStore from './store';
import {routerHistory} from './reducers/root-reducer';
import App from './app';

ReactDOM.render(
	<Provider store={configureStore()}>
		<App history={routerHistory} />
	</Provider>,
	document.getElementById('root')
);