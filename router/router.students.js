const express = require("express");
const router = express.Router();
const studentController = require("../controller/student.controller")

router.get("/", studentController.getAllStundent);
router.get("/:student_id", studentController.getStudentByID);
router.post("/", studentController.createStudent);
router.put("/:student_id", studentController.putStudent);
router.delete("/:student_id", studentController.deleteStudent);

module.exports = router;