const express = require('express')
const { authenticateJwt, SECRETKEY } = require('../middleware/auth')
const { Admin, Course } = require('../db/model')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.get('/me', authenticateJwt, async (req, res) => {
    const admin = await Admin.findOne({ username: req.user.username })
    if (!admin) {
        res.status(404).json({ mssage: "Admin doesnt exist" })
    }
    res.json({
        username: admin.username
    })
})

router.post("/signup", async (req, res) => {
    const { username, password } = req.body
    const admin = await Admin.findOne({ username })
    if (admin) {
        res.json({
            message: "Admin already exists"
        })
    }
    const newAdmin = new Admin({ username, password })
    await newAdmin.save()
    const token = jwt.sign({ username, role: "admin" }, SECRETKEY, { expiresIn: '7d' })
    res.status(200).json({ message: "Admin created successfully", token })
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body
    const admin = await Admin.findOne({ username })
    if (!admin) {
        res.status(311).json({ message: "invalid username or password" })
    }
    const token = jwt.sign({ username, role: "admin" }, SECRETKEY, { expiresIn: '7d' })
    res.json({ message: "logged in successfully", token })
})

router.post("/course", authenticateJwt, async(req,res)=>{
    const course = new Course(req.body)
    await course.save()
    res.json({message:"Course created successfully", courseId:course.id})
}
)




router.get("/course", authenticateJwt, async(req,res)=>{
    const course = await Course.find({})
    res.json({course})
})

router.get("/course/:courseId", authenticateJwt, async(req,res)=>{
    const courseId = req.params.courseId
    const course = await Course.find({courseId})
    res.json({course})
})
module.exports = router