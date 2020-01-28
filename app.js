const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const bikesRouter = require('./routes/bikes');

const app = express();

app.use(bodyParser.json()) // for parsing application/json

// CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    next();
})

app.use('/bikes', bikesRouter);


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

