import React from 'react';
import PropTypes from 'prop-types';


const BikeListItem = ({ bike }) => {
    const { title, type, price } = bike;
    return (
        <p>{title} / {type} / {parseFloat(price).toFixed(2)}&nbsp;UAH</p>
    )
};

BikeListItem.propTypes={
    bike: PropTypes.object
}

export default BikeListItem;