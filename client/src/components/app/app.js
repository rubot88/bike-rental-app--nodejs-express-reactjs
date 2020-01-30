import React, { useEffect, useContext } from 'react';

import AddForm from '../add-form';
import BikeList from '../bike-list';
import Loader from '../loader';
import BikeServiceContext from '../../context/bikeService/bikeServiceContext';

import './app.scss';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
    const { bikes, fetchBikes, loading } = useContext(BikeServiceContext);

    useEffect(() => {
        fetchBikes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const rented = bikes.filter(bike => bike.isRented);
    const available = bikes.filter(bike => !bike.isRented);
    return (
        <div className="container">
            <div className="app">
                <h2 className="font-weight-bold mb-5">Прокат велосипедов</h2>
                <AddForm />
                <h4 className="mb-3">
                    <span role="img" aria-label="Star-Struck">🤩</span>
                    &nbsp;Арендованные&nbsp;
                    <span>({rented.length})</span>
                </h4>
                {loading ? <Loader /> : <BikeList bikes={rented} rented={true} />}
                <h4 className="mb-3">
                    <span role="img" aria-label="Bicycle">🚲</span>
                    &nbsp;Свободные
                <span>({available.length})</span>
                </h4>
                {loading ? <Loader /> : <BikeList bikes={available} rented={false} />}
            </div>
        </div>
    );
}

export default App;
