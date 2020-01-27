const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const bicycles = [
    {
        name: 'Discovery Flint MC',
        type: 'Mountain bike',
        price: 10,
        rented: true
    },
    {
        name: 'Bergamont Horizon N7 Gent',
        type: 'City bike',
        price: 15,
        rented: false
    },
    {
        name: 'Cannondale CAAD Optimo Sora',
        type: 'Road bike',
        price: 12.5,
        rented: false
    },
]


app.get('/', (req, res) => {
    res.status(200).json(bicycles);
});


const PORT = config.get('port') || 5000;
const mongoURI = config.get('mongoUri');

// connect to mondoDB and start listening
async function start() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}`);
        });
    } catch (e) {
        console.log('Server error: ', e);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
}

start();

