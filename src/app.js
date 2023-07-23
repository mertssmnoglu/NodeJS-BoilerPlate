// Imports
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const { logger } = require("./middlewares")
require("dotenv-safe/config.js")

// MiddleWares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"))
app.use(logger)

// Routes
const apiRouter = require("./routes/route.js")
app.get("/", (req, res) => {
    res.send("/")
})
app.use("/api", apiRouter)

// 404
app.get("*", function (req, res) {
    res.status(404).json({ err: "http_404", statusCode: 404, message: "Not Found" })
})

app.listen(process.env.PORT, () => {
    console.log("Listenin app on port", process.env.PORT)
})
