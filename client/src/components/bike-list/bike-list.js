import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import BikeListItem from '../bike-list-item/bike-list-item';
import BikeServiceContext from '../../context/bikeService/bikeServiceContext';
import './bike-list.scss';


const BikeList = ({ bikes, rented }) => {
    const { removeBike, toggleBikeStatus } = useContext(BikeServiceContext);

    const bikesList = bikes.map(bike => {
        const { id } = bike;
        const buttons = rented ?
            <button onClick={() => toggleBikeStatus(id)} type="button" className="btn btn-danger">Сдать</button> :
            <><button onClick={() => toggleBikeStatus(id)} type="button" className="btn btn-primary mr-2">Арендовать</button>
                <button onClick={() => removeBike(id)} type="button" className="btn btn-danger">Удалить</button></>;
        return (
            <CSSTransition
                key={id}
                timeout={500}
                classNames={'bike'}>
                <li
                    className="list-group-item p-4 mb-3 d-flex justify-content-between align-items-end">
                    <BikeListItem bike={bike} />
                    <div>
                        {buttons}
                    </div>
                </li>
            </CSSTransition>

        );
    });
    return (
        bikesList.length ?
            <TransitionGroup
                component="ul"
                className=" list-group mb-5">

                {bikesList}
            </TransitionGroup> :
            <p>Нет велосипедов в этом списке</p>
    )
};

BikeList.propTypes = {
    bikes: PropTypes.arrayOf(PropTypes.object),
    rented: PropTypes.bool
};

export default BikeList;