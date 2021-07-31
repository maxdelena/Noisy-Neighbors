const router = require('express').Router();

const userController = require('../controllers/userController')

router.get('/', userController.getUser)
router.get("/:id", userController.getUserbyId)
router.get("/form/:id", userController.userForm)
router.put("/form/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)


module.exports= router