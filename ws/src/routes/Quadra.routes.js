const express = require('express');
const router = express.Router();
const Quadra = require('../models/Quadra');

router.post('/', async (req, res) => {
    try{

        const quadra = await new Quadra(req.body).save();
        res.json({ quadra });

    }catch (err) {
        res.json({ error: true, message: err.message })
    }
});

module.exports = router;