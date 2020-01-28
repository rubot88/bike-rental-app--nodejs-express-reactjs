import React from 'react';

const BikeListItem = ({ bike }) => {
    const { title, type, price } = bike;
    return (
        <p>{title} / {type} / {price}</p>
    )
};

export default BikeListItem;