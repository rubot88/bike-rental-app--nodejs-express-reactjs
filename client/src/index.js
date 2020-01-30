import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './components/app';
import Alert from './components/alert';
import ErrorBoundary from './components/error-boundary';
import AlertState from './context/alert/AlertState';
import BikeServiceState from './context/bikeService/BikeServiceState';


ReactDOM.render(
    <AlertState>
        <ErrorBoundary>
            <BikeServiceState>
                <Alert />
                <App />
            </BikeServiceState>
        </ErrorBoundary>
    </AlertState>
    , document.getElementById('root'));

serviceWorker.unregister();
