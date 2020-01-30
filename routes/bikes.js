const { Router } = require('express');

const Bike = require('../models/bike');

const router = Router();

const mapDataToBikes = (bikes) => {
    return bikes
        .map(({ _id, title, type, price, isRented }) => ({
            id: _id,
            title,
            type,
            price,
            isRented
        }));
}

router.get('/', async (req, res) => {
    try {
        let bikes = await Bike.find();

        bikes = mapDataToBikes(bikes);

        res.status(200).json(bikes);

    } catch (e) {
        res.status(404).json({ message: 'Не удалось загрузить велосипеды!' })
    }
});

router.post('/add', async (req, res) => {
    const reqBike = req.body;
    const bike = new Bike({
        ...reqBike,
        isRented: false
    });
    try {
        let savedBike = await bike.save();
        savedBike = mapDataToBikes([savedBike]);
        res.status(201).json(...savedBike);
    } catch (e) {
        console.log('Error: ', e);
        res.status(500).json({ message: 'Не удалось добавить велосипед!' })
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
});

router.post('/edit', async (req, res) => {
    const { id, isRented } = req.body;

    try {
        let updatedBike = await Bike.findByIdAndUpdate(id, { isRented: !isRented }, { new: true });
        updatedBike = mapDataToBikes([updatedBike]);
        res.status(201).json(...updatedBike);
    } catch (e) {
        console.log('Error: ', e);
        res.status(500).json({ message: 'Не удалось поменять статус велосипеда!' })
    }
})

module.exports = router;