var express = require('express');
var router = express.Router();

const db = require('../models');
const DishesService = require('../services/DishesService');

const dishesService = new DishesService(db);

// POST /dishes
router.post('/', async (req, res) =>
{
    // These are the parameters that are required in the body
    const { name, country } = req.body;

    // Asssigning variable that awaits the request and calls the create-function from the DishesService.js
    const result = await dishesService.create(name, country);

    res.json(result);
});

// GET /dishes
router.get('/', async (req, res) =>
{
    // Calling the getAll function from DishesService.sj
    const dishes = await dishesService.getAll();

    res.json(dishes);
});

// GET /dishes/:dishname
router.get('/:dishname', async (req, res) =>
{
    // Requesting the parameters of one specific dishname
    const dishname = req.params.dishname;

    // Calling the getByName-function from DishesService.js
    const dishes = await dishesService.getByName(dishname);

    res.json(dishes);
});

// Delete dishes/:dishname
router.delete('/:dishname', async (req, res) =>
{
    const dishname = req.params.dishname;

    const result = await dishesService.deleteByName(dishname);

    if(result === 0)
    {
        return res.status(404).json({ message: 'Dish not found' });
    }

    res.json({ deleted: result });

});

module.exports = router;