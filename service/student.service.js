const studentModel = require("../model/student.model");

const getAllStundent = (callback)=>{
    studentModel.getAllStundent(callback);
};

const getStudentByID = (student_id, callback) =>{
    studentModel.getStudentByID(student_id, callback)
};

const createStudent = (student_name, school_number, teacher_id, callback) => {
    studentModel.createStudent(student_name, school_number, teacher_id, callback);
};

const putStudent = (student_id, student_name, school_number, callback) => {
    studentModel.putStudent(student_id, student_name, school_number, callback);
};

const deleteStudent = (student_id, callback) => {
    studentModel.deleteStudent(student_id, callback);
};

module.exports = {
    getAllStundent,
    getStudentByID,
    createStudent,
    putStudent,
    deleteStudent
};
