const express = require('express');
const router = express.Router();
const loginController = require('../app/controllers/loginControler');

router.get('/',loginController.getMethodLogin);
router.post('/',loginController.postMethodLogin);

module.exports = router;