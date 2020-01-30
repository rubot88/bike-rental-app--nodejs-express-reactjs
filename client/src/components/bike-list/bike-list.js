import React from 'react';
import BikeListItem from '../bike-list-item/bike-list-item';

const BikeList = ({bikes}) => {

    const bikesList = bikes.map(bike =>
        bike.isRented ?
            <li className="list-group-item p-4 mb-3 d-flex justify-content-between align-items-end">
                <BikeListItem bike={bike} />
                <div>
                    <button type="button" className="btn btn-danger">Сдать</button>
                </div>
            </li> :
            <li className="list-group-item p-4 mb-3 d-flex justify-content-between align-items-end">
                <BikeListItem bike={bike} />
                <div>
                    <button type="button" className="btn btn-primary mr-2">Арендовать</button>
                    <button type="button" className="btn btn-danger">Удалить</button>
                </div>
            </li>);
    return (
        <React.Fragment>
            <ul className="item-list list-group mb-5">
                {bikesList}
            </ul>
        </React.Fragment>
    )
};

export default BikeList;