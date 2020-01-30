import React from 'react';
import PropTypes from 'prop-types';

import { bikeTypes } from '../../utils/bikeTypes';


const BikeListItem = ({ bike }) => {
    const { title, type, price } = bike;
    return (
        <p>{title} / {bikeTypes[type]} / ${parseFloat(price).toFixed(2)}</p>
    )
};

BikeListItem.propTypes = {
    bike: PropTypes.object
}

export default BikeListItem;