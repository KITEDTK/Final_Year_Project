const express = require('express');
const router = express.Router();
const dumpController = require('../controllers/dumpController');

router.post('/users', dumpController.userDumps);
router.post('/sizes', dumpController.sizeDumps);
router.post('/colors', dumpController.colorDumps);
router.post('/categories',dumpController.categoriesDumps);
router.post('/clothes',dumpController.clothesDumps);
router.post('/clothDetails', dumpController.clothDetailsDump);

module.exports = router;