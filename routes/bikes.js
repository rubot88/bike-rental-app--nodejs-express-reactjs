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
        res.status(404).json({ message: 'Unable to load bikes!' })
    }
});

router.post('/add', async (req, res) => {
    const reqBike = req.body;
    const bike = new Bike({
        ...reqBike,
        isRented: false
    });
    try {
        const savedBike = await bike.save();
        res.status(201).json(savedBike);
    } catch (e) {
        console.log('Error: ', e);
        res.status(500).json({ message: 'Unable to save bike!' })
    }
});

router.delete('/remove/:id', async (req, res) => {
    try {
        await Bike.findOneAndRemove(req.params.id);
        const bikes = await Bike.find();
        res.status(200).json(bikes);
    } catch (e) {
        console.log('Error: ', e);
        res.status(500).json({ message: 'Unable to remove bike!' })
    }
})

module.exports = router;