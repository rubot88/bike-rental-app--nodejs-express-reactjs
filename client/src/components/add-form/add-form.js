import React, { Fragment, useState, useContext } from 'react';

import BikeServiceContext from '../../context/bikeService/bikeServiceContext';
import AlertContext from '../../context/alert/alertContext';
import './add-form.scss';
import { bikeTypes } from '../../utils/bikeTypes';

const AddForm = () => {

    let typesList = Object.keys(bikeTypes);

    const { addBike } = useContext(BikeServiceContext);
    const { show, hide } = useContext(AlertContext);

    const [form, setForm] = useState({ title: '', type: typesList[0], price: '' });
    const { title, type, price } = form;

    const changeHandler = event => {
        setForm(({ ...form, [event.target.name]: event.target.value }));
    };

    const submitHandler = async event => {
        event.preventDefault();
        if (!title.trim()) {
            return show('Введите название велосипеда', 'warning');
        } else {
            await addBike(form);
            setForm({ ...form, title: '', price: '' });
        }
        setTimeout(hide, 2000);
    };

    typesList = typesList.map((type, idx) => <option key={idx} value={type}>{bikeTypes[type]}</option>);

    return (
        <Fragment>
            <h4 className="mb-3"><span role="img" aria-label="Money-Mouth Face">🤑</span>&nbsp;Добавить новый велосипед</h4>
            <form
                className="add-form d-flex justify-content-between p-4 mb-4"
                onSubmit={submitHandler}>
                <div className="form-group mr-4 mb-1">
                    <label htmlFor="bikeTitle">Название велосипеда</label>
                    <input
                        required
                        className="form-control"
                        type="text"
                        name="title"
                        id="bikeTitle"
                        placeholder="напр. Discovery Prestige"
                        onChange={changeHandler}
                        value={title} />
                </div>
                <div className="form-group mr-4 mb-1">
                    <label htmlFor="bikeType">Тип велосипеда</label>
                    <select
                        className="form-control"
                        name="type"
                        id="bikeType"
                        onChange={changeHandler}
                        value={type}>
                        {typesList}
                    </select>
                </div>
                <div className="form-group mr-4 mb-1">
                    <label htmlFor="bikePrice"> Цена аренды</label>
                    <input
                        required
                        className="form-control"
                        type="number"
                        name="price"
                        id="bikePrice"
                        placeholder="Цена аренды"
                        onChange={changeHandler}
                        value={price} />
                </div>
                <button type="submit" className="btn text-white align-self-end mb-1">Добавить</button>
            </form>
        </Fragment>
    )
};

export default AddForm;

