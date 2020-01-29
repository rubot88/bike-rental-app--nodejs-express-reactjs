import React, { useReducer, useContext } from 'react';

import { Provider as BikeServiceProvider } from './bikeServiceContext';
import { bikeServiceReducer } from './bikeServiceReducer';
import { SHOW_LOADER, HIDE_LOADER, ADD_BIKE, REMOVE_BIKE, FETCH_BIKES } from '../types';
import { AlertContext } from '../alert/alertContext';

const url = '/bikes';

export const BikeServiceState = ({ children }) => {
    return (
        <BikeServiceProvider>
            {children}
        </BikeServiceProvider>
    );
};
