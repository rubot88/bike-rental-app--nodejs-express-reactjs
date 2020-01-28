const { Schema, model } = require('mongoose');

const bikeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    isRented: {
        type: Boolean,
        required: true
    }
});

module.exports = model('Bike', bikeSchema);