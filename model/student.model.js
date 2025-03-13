const db = require("../db/db");

const Student = {
    getAllStundent : (callback)=>{
        db.query("SELECT * FROM Students", callback);
    },

    getStudentByID : (student_id, callback) =>{
        db.query("SELECT * FROM Students WHERE student_id = ?", [student_id], callback);
    },

    createStudent : (student_name, school_number, teacher_id, callback) =>{
        db.query("INSERT INTO Students (student_name, school_number, teacher_id) VALUES (?, ?, ?)", [student_name, school_number, teacher_id], callback);
    },

    putStudent : (student_id, student_name, school_number, callback) => {
        db.query("UPDATE Students SET student_name = ?, school_number = ? WHERE student_id = ? ", [student_name, school_number, student_id], callback);
    },

    deleteStudent : (student_id, callback)=>{
        db.query("DELETE FROM Students WHERE student_id = ?", [student_id], callback);
    }
};

module.exports = Student;