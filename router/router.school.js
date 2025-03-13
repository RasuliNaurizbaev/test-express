const express = require("express");
const router = express.Router();
const schoolController = require('../controller/school.controller');

router.get('/', schoolController.getAllSchools);
router.get('/:id', schoolController.getSchoolById);
router.post('/', schoolController.createSchool);
router.put('/:id', schoolController.putSchool);

module.exports = router;