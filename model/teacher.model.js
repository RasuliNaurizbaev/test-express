const { format } = require("mysql2");
const db = require("../db/db");
const { query } = require("express");

const Teachers = {
    getAllTeachers: (callback)=>{
        db.query("SELECT * FROM Teachers", callback);
    },
    getTeacherByID: (teacher_id, callback)=>{
        db.query("SELECT teacher_name FROM Teachers WHERE teacher_id = ?", [teacher_id], callback);
    },
    createTeacher: (teacher_name, school_number, callback)=>{
        db.query("INSERT INTO Teachers (teacher_name, school_number) VALUES (?, ?)", [teacher_name, school_number], callback);
    },
    putTeacher: (school_number, teacher_name, callback)=>{
        db.query("UPDATE Teachers SET teacher_name = ? WHERE teacher_id = ?", [teacher_name, school_number], callback);
    },
    deleteTeacher: (school_number, teacher_name, callback) =>{
        db.query("DELETE FROM Teachers WHERE school_number = ? AND teacher_name = ?", [school_number, teacher_name], callback);
    }

}

module.exports = Teachers;
