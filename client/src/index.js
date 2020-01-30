import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

import ErrorBoundary from './components/error-boundary';
import AlertState  from './context/alert/AlertState';
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
