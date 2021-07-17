const express = require('express');

const EducationLevels = require('../controllers/educationLevels')

const router = express.Router();

router.get('/', EducationLevels.getAll);


module.exports = router;
 