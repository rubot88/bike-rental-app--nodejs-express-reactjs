const { Router } = require('express');

const Bike = require('../models/bike');
const router = Router();

const mapDataToBikes = (bikes) => {
    return bikes
        .map(bike => ({
            ...bike,
            id: bike._id
        }));
}

router.get('/', async (req, res) => {
    try {
        let bikes = await Bike.find();

        bikes = mapDataToBikes(bikes);
        res.status(200).json(bikes);

    } catch (e) {
        res.status(500).json({ message: 'Unable to save bike!' })
    }
});

router.post('/', async (req, res) => {
    const reqBody = req.body;
console.log(reqBody);

    // const bike = new Bike({
    //     ...reqBody,
    //     isRented: false
    // });

    // try {
    //     await bike.save();
    //     res.status(200).send({ message: 'Bike was successfully saved', type: 'success' });
    // } catch (e) {
    //     console.log('Error: ', e);
    //     res.status(500).json({ message: 'Unable to save bike!' })
    // }
});

module.exports = router;