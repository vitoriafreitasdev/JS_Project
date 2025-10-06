const router = require("express").Router()
const userServer = require("./usersRouter")

router.use("/", userServer)

module.exports = router