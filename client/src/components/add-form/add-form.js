import React,{ Fragment, useState, useContext } from 'react';

import BikeServiceContext from '../../context/bikeService/bikeServiceContext';
import AlertContext from '../../context/alert/alertContext';
import './add-form.scss';

const AddForm = () => {
    let bikeTypes = [
        { value:'default', title:'Выберите тип велосипеда'},
        { value: 'mountainBike', title: 'Горный' },
        { value: 'cityBike', title: 'Городской' },
        { value: 'roadBike', title: 'Дорожный' },
        { value: 'hybridBike', title: 'Гибрид' }
    ];

const { addBike }=useContext(BikeServiceContext);
const {show}=useContext(AlertContext);

const [from,setForm] = useState({ title:'', type: 'default', price:''});
const {title,type,price} = form;

const changeHandler = event =>{
    setForm((form)=>({...form,[event.target.name]: event.target.value}));
};

const formValidation = ()=>{
    let isValid = true;
    
    if(!title.trim()){
        isValid = false;
        show('Введите название велосипеда', 'warning');
    }
    if(type==='default'){
        isValid = false;
        show('Выбирите тип велосипеда', 'warning');
    }
    return isValid;
};

const submitHandler = event=>{
    event.preventDefault(); 
    if(formValidation()){
      await addBike(from);
    };
};

    bikeTypes = bikeTypes.map(type => <option value={type.value}>{type.title} </option>)
    return (
        <Fragment>
            <h4 className="mb-3"><span role="img" aria-label="Money-Mouth Face">🤑</span>&nbsp;Добавить новый велосипед</h4>
            <form 
            className="add-form d-flex justify-content-between p-4 mb-4"
            onSubmit={submitHandler}>
                <div className="form-group mr-4 mb-1">
                    <label htmlFor="bikeTitle" >Название велосипеда</label>
                    <input 
                    required
                    className="form-control" 
                    type="text" 
                    name="title" 
                    id="bikeTitle"
                    placeholder="напр. Discovery Prestige"
                    onChange={changeHandler} 
                    value={title}/>
                </div>
                <div className="form-group mr-4 mb-1">
                    <label htmlFor="bikeType">Тип велосипеда</label>
                    <select 
                    className="form-control" 
                    name="type" 
                    id="bikeType"
                    onChange={changeHandler}
                    value={type}>
                        {bikeTypes}
                    </select>
                </div>
                <div className="form-group mr-4 mb-1">
                    <label htmlFor="bikePrice"> Цена аренды</label>
                    <input 
                    required
                    className="form-control" 
                    type="number" 
                    min="0.01"
                    name="price" 
                    id="bikePrice"
                    placeholder="100.00"
                    onChange={changeHandler} 
                    value={price}/>
                </div>
                <button type="submit" class="btn text-white align-self-end mb-1">Добавить</button>
            </form>
        </Fragment>
    )
};

export default AddForm;

