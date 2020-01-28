import React from 'react';

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
            <h4>Добавить новый велосипед</h4>
            <form className="form-group d-flex justify-content-around align-items-center">
                <label >
                    Название велосипеда
                    <input className="form-control" type="text" name="title" />
                </label>
                <label>
                    Тип велосипеда
                    <select className="form-control" id="bike-type" name="type">
                        {bikeTypes}
                    </select>
                </label>
                <label >
                    Цена аренды
                    <input className="form-control"  type="text" name="price" />
                </label>
                <button type="submit" class="btn btn-success ">Добавить</button>
            </form>
        </React.Fragment>
    )
};

export default AddForm;

