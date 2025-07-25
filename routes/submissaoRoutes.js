const express = require('express');
const router = express.Router();
const Submissao = require('../models/Submissao');

router.post('/', async (req, res) => {
    try {
        const nova = new Submissao(req.body);
        const salva = await nova.save();
        res.status(201).json(salva);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const todas = await Submissao.find();
        res.json(todas);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
});

module.exports = router;
