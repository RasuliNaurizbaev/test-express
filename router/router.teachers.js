const express = require("express");
const router = express.Router();
const teacherController = require("../controller/teacher.controller");

router.get("/", teacherController.getAllTeachers);
router.get("/:teacher_id", teacherController.getTeacherByID);
router.post("/", teacherController.createTeacher);
router.put("/:school_number", teacherController.putTeacher);
router.delete("/:school_number/:teacher_name", teacherController.deleteTeacher);

module.exports = router;