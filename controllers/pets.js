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
        
    }
})




module.exports = router

