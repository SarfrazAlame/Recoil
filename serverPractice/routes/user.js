const express = require('express')
const { User, Course } = require('../db/model')
const jwt = require('jsonwebtoken')
const { SECRETKEY, authenticateJwt } = require('../middleware/auth')
const router = express.Router()

router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
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

router.post('/login', async (req, res) => {
    const { username, password } = req.headers
    const user = await User.findOne({ username, password })
    if (user) {
        const token = jwt.sign({ username, role: "user" }, SECRETKEY, { expiresIn: '7d' })
        res.json({
            message: "Logged in successfull",
            token
        })
    } else {
        return res.json({
            message: "invalid username or password"
        })
    }
})

router.get('/course', authenticateJwt, async (req, res) => {
    const courses = await Course.findOne({ published: true })
    res.json({ courses })
})


router.post('/course/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findById(req.params.courseId)
    console.log(course)
    if (course) {
        const user = await User.findOne({ username: req.user.username })
        if (user) {
            user.parchedCourse.push[course]
            await user.save()
            res.json({ message: "Course purchased Successfully" })
        } else {
            res.status(500).json({ message: "User not found" })
        }
    } else {
        res.status(401).json({ message: "course not found" })
    }
})

router.get("/purchasedCourse", authenticateJwt, async (req, res) => {
    const user = await User.findOne({ username: req.user.username }).populate("purchasedCourse")
    if (user) {
        res.json({ purchasedCourse: user.purchasedCourse || [] })
    } else {
        res.status(302).json({ message: "user not found" })
    }
})

module.exports = router