function logger(req, res, next) {
    const remoteAddress = req.socket.remoteAddress

    console.log(new Date(), {
        method: req.method,
        path: req.path,
        remoteAddress,
        body: req.body,
    })
    next()
}

module.exports = logger
