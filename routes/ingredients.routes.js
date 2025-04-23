const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/ingredients', async (req, res) => {

    const ingredients = await db.query('SELECT * FROM ingredient;');
    console.log(ingredients.rows);
    res.json(ingredients.rows);
});

module.exports = router;