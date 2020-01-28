import React from 'react';

import AddForm from './components/add-form';
import BikeList from './components/bike-list';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h2>Прокат велосипедов</h2>
        <AddForm />
        <BikeList />
      </div>
    </div>
  );
}

export default App;
