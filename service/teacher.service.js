const Teachers = require("../model/teacher.model");

const getAllTeachers = (callback)=>{
    Teachers.getAllTeachers(callback);
};

const getTeacherByID = (teacher_id, callback)=>{
    Teachers.getTeacherByID(teacher_id, callback);
};

const createTeacher = (teacher_name, school_number, callback)=>{
    Teachers.createTeacher(teacher_name, school_number, callback);
};

const putTeacher = (school_number, teacher_name, callback) => {   
    Teachers.putTeacher(school_number, teacher_name, callback);
};

const deleteTeacher = (school_number, teacher_name, callback)=>{
    Teachers.deleteTeacher(school_number, teacher_name, callback);
};

module.exports = {
    getAllTeachers,
    getTeacherByID,
    createTeacher,
    putTeacher,
    deleteTeacher
};

