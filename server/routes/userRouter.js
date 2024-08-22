const express = require("express")
const userController = require("../controllers/userControls")
const router = express.Router()
router.post("/usercreate",userController.userCreate );
router.get("/getalluser", userController.getallUser);
router.get("/getuserbyId/:id",userController.getuserbyId );
router.put("/updateone/:id", userController.updateOne);
router.put("/update/:id", userController.update );
router.delete("/deleteById/:id", userController.deleteById);

module.exports = router