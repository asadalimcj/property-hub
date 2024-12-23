const express = require('express');
const router = express.Router();
const Bought = require('../models/Bought');

router.post('/', async (req, res) => {
    try {
        const { email, house } = req.body;
        const newPurchase = new Bought({ email, house });
        await newPurchase.save();
        res.status(200).send({ message: 'Purchase recorded successfully!' });
    } catch (error) {
        console.error('Error saving purchase:', error);
        res.status(500).send({ message: 'Error purchasing house!' });
    }
});

module.exports = router;
