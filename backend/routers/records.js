const express = require('express');
const recordsControl = require('../controllers/records.js')


const router = express.Router();

router.get('/', recordsControl.getAll);
router.get('/:bla', recordsControl.getAll);


module.exports = router;
 