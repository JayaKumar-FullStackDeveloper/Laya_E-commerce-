const express = require("express")
const router = express.Router()
const authUserController = require("../controllers/authUserController")


router
.route("/registration")
.post(authUserController.registration)


module.exports = router