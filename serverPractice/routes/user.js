const express = require('express')
const { User } = require('../db/model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()
const SECRETKEY = "r09jknfi20jfjtu4jf0"

router.post('signup', (req, res) => {
    const { username, password } = req.body
    const user = User.find({ username })
    if (user) {
        return res.status(311).json({
            message: "User Already exists"
        })
    }
    const newUser = new User({ username, password })
    newUser.save()
    const token = jwt.sign({ username, role: "user" }, SECRETKEY, { expiresIn: '7d' })
    return res.status(200).json({
        message: "user has been successfully registered",
        token
    })
})
