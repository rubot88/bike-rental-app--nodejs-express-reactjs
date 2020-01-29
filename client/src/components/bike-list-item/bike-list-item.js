import React from 'react';

const BikeListItem = ({ bike }) => {
    const { title, type, price } = bike;
    return (
        <p>{title} / {type} / {price.toFixed(2)}&nbsp;UAH</p>
    )
};

export default BikeListItem;