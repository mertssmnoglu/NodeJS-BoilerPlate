// Imports
const express = require("express")
const app = express()
const apiRouter = require("./routes/route.js")
require("./config")()

// /api route
app.use("/api", apiRouter)

// / route
app.get("/", (req, res) => {
    res.send("/")
})

app.listen(process.env.PORT)
