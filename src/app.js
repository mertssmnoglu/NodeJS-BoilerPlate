// Imports
const app = require("express")()
const apiRouter = require("./routes/route.js")
require("dotenv-safe/config.js")

// /api route
app.use("/api", apiRouter)

// / route
app.get("/", (req, res) => {
    res.send("/")
})

// 404
app.get("*", function (req, res) {
    res.status(404).json({ err: "http_404", statusCode: 404, message: "Not Found" })
})

app.listen(process.env.PORT, () => {
    console.log("Listenin app on port", process.env.PORT)
})
