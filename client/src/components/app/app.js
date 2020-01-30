import React, { useEffect, useContext } from 'react';

import AddForm from '../add-form';
import BikeList from '../bike-list';
import Loader from '../loader';
import BikeServiceContext from '../../context/bikeService/bikeServiceContext';

import './app.scss';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    // const bikes = [
    //     {
    //         id: 1,
    //         title: 'Ardis Force MTB',
    //         type: 'Велосипед горный',
    //         price: 75,
    //         isRented: true
    //     },
    //     {
    //         id: 2,
    //         title: 'Bergamont Bergamonster',
    //         type: 'Велосипед городской',
    //         price: 67,
    //         isRented: false
    //     },
    //     {
    //         id: 3,
    //         title: 'Giant Revolt Advanced ',
    //         type: 'Велосипед гравел',
    //         price: 95,
    //         isRented: true
    //     },
    //     {
    //         id: 4,
    //         title: 'Revolt Advanced ',
    //         type: 'Велосипед гравел',
    //         price: 95,
    //         isRented: false
    //     }
    // ];

    const { bikes,fetchBikes,loading } = useContext(BikeServiceContext);

    useEffect(()=>{
        fetchBikes();
    },[]);

    const rented = bikes.filter(bike => bike.isRented);
    const available = bikes.filter(bike => !bike.isRented);
    return (
        <div className="container">
            <div className="app">
                <h2 className="font-weight-bold mb-5">Прокат велосипедов</h2>
                <AddForm />
                <h4 className="mb-3"><span role="img" aria-label="Star-Struck">🤩</span>&nbsp;Арендованные</h4>
                { loading ? <Loader/>: <BikeList bikes={rented} />}
                <h4 className="mb-3"><span role="img" aria-label="Bicycle">🚲</span>&nbsp;Свободные</h4>
                {loading?<Loader/> : <BikeList bikes={available} />}
            </div>
        </div>
    );
}

export default App;
