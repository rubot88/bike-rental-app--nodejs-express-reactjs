import React from 'react';

import './error-indicator.scss';
import icon from './error-icon.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <span className="error">Oops!</span>
            <span>Something has gone terribly wrong</span>
            <span>(we are already working on it)</span>
        </div>
    );
};

export default ErrorIndicator;