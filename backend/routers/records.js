const express = require('express');
const recordsControl = require('../controllers/records.js')


const router = express.Router();

router.get('/', recordsControl.getAll);
router.get('/csv', recordsControl.getCsv);
router.get('/stats/:aggregationType/:aggregationValue', recordsControl.getStats);




module.exports = router;
 