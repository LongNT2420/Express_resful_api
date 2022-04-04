const express = require('express');
const router = express.Router();
const privateController = require('../app/controllers/privateController'); 

router.get('/', privateController.checkRule,privateController.showPage);

module.exports = router;