import React, { useReducer, useContext } from 'react';

import BikeServiceContext from './bikeServiceContext';
import { bikeServiceReducer } from './bikeServiceReducer';
import { SHOW_LOADER, HIDE_LOADER, ADD_BIKE, REMOVE_BIKE, FETCH_BIKES } from '../types';
import { AlertContext } from '../alert/alertContext';

const url = '/bikes';

 const BikeServiceState = ({ children }) => {
        const initialState = {
            bikes: [],
            loading: false
        };

        const [state, dispatch] = useReducer(bikeServiceReducer, initialState);
        const { show } = useContext(AlertContext);

        const showLoader = () => {
            dispatch({ type: SHOW_LOADER });
        };

        const hideLoader = () => {
            dispatch({ type: HIDE_LOADER });
        };

        const fetchBikes = async() => {
            showLoader();
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    const error = await response.json();
                    show(error.message);
                } else {
                    const payload = await response.json();
                    hideLoader();
                    payload.length ?
                        dispatch({ type: FETCH_BIKES, payload }) :
                        show('There are no bikes to show');
                }
            } catch (e) {
                console.log(e);
                throw new Error();
            }
        };

        const addBike = async bike => {
            try {
                const response = await fetch(`${url}/add`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(bike)
                });
                if (response.status !== 201) {
                    const error = await response.json();
                    show(error.message);
                } else {
                    const payload = await response.json();

                    dispatch({
                        type: ADD_BIKE,
                        payload
                    });
                    show("Bike was successfully added", 'success');
                }
            } catch (e) {
                console.log(e);
                throw new Error();
            }
        };

        const removeBike = async id => {
            const response = await fetch(`${url}/remove/${id}`, { method: "delete" });
            try {
                if (!response.ok) {
                    const error = await response.json();
                    show(error.message);
                } else {
                    dispatch({ type: REMOVE_BIKE, payload: id });
                    show("Bike was successfully removed", 'success');
                }
            } catch (e) {
                console.log(e);
                throw new Error();
            }
        };

        return ( 
            <BikeServiceContext.Provider value = {{
                showLoader,
                addBike,
                removeBike,
                fetchBikes,
                loading: state.loading,
                bikes: state.bikes
            }}>
                { children } 
            </BikeServiceContext.Provider>);
        };

export default BikeServiceState;