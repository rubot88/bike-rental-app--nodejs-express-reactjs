import React, { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';


import BikeServiceContext from './bikeServiceContext';
import bikeServiceReducer from './bikeServiceReducer';
import { SHOW_LOADER, HIDE_LOADER, ADD_BIKE, REMOVE_BIKE, FETCH_BIKES, TOGGLE_BIKE_STATUS } from '../actions';
import AlertContext from '../alert/alertContext';

const url = 'http://localhost:5000/bikes';


const BikeServiceState = ({ children }) => {

    const initialState = {
        bikes: [],
        loading: false
    };

    const [state, dispatch] = useReducer(bikeServiceReducer, initialState);

    const { show, hide } = useContext(AlertContext);

    const showLoader = () => {

        dispatch({ type: SHOW_LOADER });
    };

    const hideLoader = () => {

        dispatch({ type: HIDE_LOADER });
    };

    const fetchBikes = async () => {

        showLoader();
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const error = await response.json();
                show(error.message);
            } else {
                const payload = await response.json();
                hideLoader();
                dispatch({ type: FETCH_BIKES, payload });
            }
            setTimeout(hide, 2000);
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
                show("Велосипед был успешно добавлен", "success");
            }
            setTimeout(hide, 2000);
        } catch (e) {
            console.log(e);
            throw new Error();
        }
    };

    const removeBike = async id => {
        try {
            const response = await fetch(`${url}/remove/${id}`, { method: "delete" });
            if (!response.ok) {
                const error = await response.json();
                show(error.message);
            } else {
                dispatch({ type: REMOVE_BIKE, payload: id });
            }
            setTimeout(hide, 2000);
        } catch (e) {
            console.log(e);
            throw new Error();
        }
    };

    const toggleBikeStatus = async id => {
        const bike = state.bikes.find(el => el.id === id);
        try {
            const response = await fetch(`${url}/edit`, {
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
                    type: TOGGLE_BIKE_STATUS,
                    payload
                });
            }
            setTimeout(hide, 2000);
        } catch (e) {
            console.log(e);
            throw new Error();
        }
    };

    return (
        <BikeServiceContext.Provider value={{
            showLoader,
            addBike,
            removeBike,
            fetchBikes,
            toggleBikeStatus,
            loading: state.loading,
            bikes: state.bikes
        }}>
            {children}
        </BikeServiceContext.Provider>);
};

BikeServiceState.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default BikeServiceState;