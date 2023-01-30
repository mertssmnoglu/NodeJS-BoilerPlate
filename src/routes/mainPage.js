const router = require("express").Router()
const mainPageController = require("../controller/mainPage")

router.get("/", mainPageController.list) // /api/

module.exports = router
