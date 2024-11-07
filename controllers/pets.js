const { models } = require('mongoose')
const Pet = require('../models/pet')
const express = require('express')
const router = express.Router()


// Create route

router.post('/', async(req, res)=>{
    try {
        const createdPet = await Pet.create(req.body)
        res.status(201).json(createdPet)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

// Index
router.get('/', async(req, res) => {
    try {
        const allPets = await Pet.find()
        res.status(202).json(allPets)
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


module.exports = router

