// Imports
const express = require("express")
const app = express()
const apiRouter = require("./routes/route.js")
require("dotenv-safe/config.js")

// /api route
app.use("/api", apiRouter)

// / route
app.get("/", (req, res) => {
    res.send("/")
})

app.listen(process.env.PORT, () => {
    console.log("Listenin app on port", process.env.PORT)
})
