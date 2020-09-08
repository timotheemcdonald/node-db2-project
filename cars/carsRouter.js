const express = require('express')

const db = require('../data/connection.js')

const router = express.Router()

router.get('/', (req, res) => {
    db.select('*')
    .from('cars')
    .then(cars => {
        res.status(200).json({ data: cars})
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.get('/:id', (req, res) => {
    db('cars')
    .where('id', '=', req.params.id)
    .then(car => {
        res.status(200).json({ data: car })
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

router.post('/', (req, res) => {
    const newCar = req.body

    db('cars')
    .insert(newCar)
    .returning('id')
    .then(ids => {
        res.status(201).json({ data: ids})
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
})

module.exports = router