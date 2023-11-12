const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/admin', adminRouter)

mongoose.connect("mongodb://127.0.0.1:27017/courses")

app.listen(4000, () => {
    console.log("port running on 4000")
})