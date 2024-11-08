const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
app = express()
const mongoose = require('mongoose')
const petRouter = require('./controllers/pets')


// Database code
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', ()=>{
    console.log(`connected to MongoDB ${mongoose.connection.name}`)
})


// midleware
app.use(express.json())
app.use('/pets', petRouter)
// Routes


// Listener.
app.listen(4000, ()=>{
    console.log("the express app is ready")
})