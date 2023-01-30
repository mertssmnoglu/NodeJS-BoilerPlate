const router = require("express").Router()
const userRouter = require("./user.js")
const mainPage = require("./mainPage.js")

router.use("/", mainPage) // /api/
router.use("/user", userRouter) // /api/user

module.exports = router
