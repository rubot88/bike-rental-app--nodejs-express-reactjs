import React from 'react';
import BikeListItem from '../bike-list-item/bike-list-item';

const BikeList = () => {
    const bikes = [
        {
            id: 1,
            title: 'Ardis Force MTB',
            type: 'Велосипед горный',
            price: 15
        },
        {
            id: 1,
            title: 'Bergamont Bergamonster',
            type: 'Велосипед городской',
            price: 12.5
        },
        {
            id: 1,
            title: 'Giant Revolt Advanced ',
            type: 'Велосипед гравел',
            price: 15
        },
    ]
    const bikesList = bikes.map(bike => <li className="list-group-item">
        <BikeListItem bike={bike} />
    </li>);
    return (
        <React.Fragment>
            <h4>Арендованные велосипеды</h4>
            <ul className="item-list list-group">
                {bikesList}
            </ul>
            <h4>Свободные велосипеды</h4>
            <ul className="item-list list-group">
                {bikesList}
            </ul>

        </React.Fragment>
    )
};

export default BikeList;