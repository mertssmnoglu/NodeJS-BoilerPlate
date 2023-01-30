const router = require("express").Router()
const userController = require("../controller/user")

router.get("/", userController.list) // /api/user/

module.exports = router
