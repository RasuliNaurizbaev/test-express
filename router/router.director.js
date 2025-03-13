const express = require("express");
const router = express.Router();
const directorController = require("../controller/director.controller");

router.get("/", directorController.getAllDirectors);
router.get("/:school_number", directorController.getDirectorBySchoolNumber);
router.post("/", directorController.createDirector);
router.put("/:school_number", directorController.putDirector);

module.exports = router;