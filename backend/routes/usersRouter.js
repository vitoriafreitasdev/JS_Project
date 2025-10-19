const router = require("express").Router()
const checkToken = require("../utils/checkToken")

const UserController = require("../controller/UserController")

router.route("/user/cadastro").post((req, res) => UserController.register(req, res))
router.route("/user/login").post((req, res) => UserController.login(req, res))
router.route("/user/:id").get(checkToken, (req, res) => UserController.getUser(req, res))
router.route("/user/addExercise/:id").post(checkToken, (req, res) => UserController.addExercise(req, res))
router.route("/user/delete/:id").delete(checkToken, (req, res) => UserController.deleteExercise(req, res))
router.route("/user/edit/:id").put(checkToken, (req, res) => UserController.uptade(req, res))


module.exports = router