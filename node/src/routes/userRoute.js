const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.getAllUsers);

router.post('/', userController.create);

router.post('/login', userController.login);

router.put('/:id', userController.update);

router.delete('/:id', userController.deleteUser);

module.exports = router;