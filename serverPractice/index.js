const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const app = express()

app.use(express.json())

app.use('/user', userRouter)

mongoose.connect("mongodb://127.0.0.1:27017/courses")

app.listen(4000, () => {
    console.log("port running on 4000")
})