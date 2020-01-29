import React from 'react';

import './add-form.scss';

const AddForm = () => {
    let bikeTypes = [
        { value: 'mountainBike', title: 'Горный' },
        { value: 'cityBike', title: 'Городской' },
        { value: 'roadBike', title: 'Дорожный' },
        { value: 'hybridBike', title: 'Гибрид' }
    ];
    bikeTypes = bikeTypes.map(type => <option value={type.value}>{type.title} </option>)
    return (
        <React.Fragment>
            <h4 className="mb-3"><span role="img" aria-label="Money-Mouth face">🤑</span>&nbsp;Добавить новый велосипед</h4>
            <form className="add-form d-flex justify-content-between p-4 mb-4">
                <div className="form-group mr-4 mb-1">
                    <label htmlFor="bikeTitle" >Название велосипеда</label>
                    <input className="form-control" type="text" name="title" id="bikeTitle" placeholder="напр. Discovery Prestige" />
                </div>
                <div className="form-group mr-4 mb-1">
                    <label htmlFor="bikeType">Тип велосипеда</label>
                    <select className="form-control" name="type" id="bikeType">
                        {bikeTypes}
                    </select>
                </div>
                <div className="form-group mr-4 mb-1">
                    <label htmlFor="bikePrice"> Цена аренды</label>
                    <input className="form-control" type="text" name="price" id="bikePrice" placeholder="100.00" />
                </div>
                <button type="submit" class="btn text-white align-self-end mb-1">Добавить</button>
            </form>
        </React.Fragment>
    )
};

export default AddForm;

